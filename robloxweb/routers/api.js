const config = require("../helpers/config");
const parse = require("../robloxApi/parse");
const querystring = require("querystring");
const updateBalances = require("../helpers/updateBalances");
const hexedSnowflake = require("../helpers/hexedSnowflake");
const crypto = require("crypto");
const axios = require("axios");
const express = require("express");
const fs = require("fs");
const router = express.Router();

let submittedPayments = [];

router.get("/stats", async (req, res) => {
    let cookies = Object.keys(config.stats);

    let allRobux = Math.floor(cookies.reduce((a, b) => a + config.countWithoutReserved(b), 0) / 100 * 70);

    let sortedByBalance = cookies.sort((a, b) => config.countWithoutReserved(b) - config.countWithoutReserved(a));
    let maxRobuxPerOrder;
    if(!sortedByBalance[0]) maxRobuxPerOrder = 0;
    else maxRobuxPerOrder = config.countWithoutReserved(sortedByBalance[0]);
    maxRobuxPerOrder =  Math.floor(maxRobuxPerOrder / 100 * 70);


    res.status(200).json({
        allRobux,
        maxRobuxPerOrder
    })
});

router.get("/games", async (req, res) => {
    if(!req.query.username) return res.status(400).json({ ok: false, error: "Укажите username" });
    let id = await parse.fetchUserIdByUsername(req.query.username);
    if(!id?.ok) return res.status(500).json({ ok: false, error: "Не удалось получить пользователя" });
    let games = await parse.fetchGames(id.id);
    if(!games?.ok) return res.status(500).json({ ok: false, error: "Не удалось получить игры" });
    res.status(200).json({ ok: true, data: games.data.slice(0, 3), userId: id.id });
});

router.get("/games/icons", async (req, res) => {
   if(!req.query.id) return res.status(400).json({ ok: false, error: "Укажите id" });
   let ids = req.query.id.split(",").map(id => ({
       requestId: id + "::GameIcon:150x150:png:regular",
       type: "GameIcon",
       targetId: id,
       format: "png",
       size: "150x150"
   }));

   let result = await axios.post("https://thumbnails.roblox.com/v1/batch", ids).catch(e => {});
   if(!result?.data?.data) return res.status(400).json({ ok: false, error: "Ошибка при получении изображений" });

   let icons = {};
   result.data.data.forEach(data => {
      icons[data.targetId] = data.imageUrl;
   });

    res.status(200).json({ ok: true, data: icons });
});

router.post("/can_buy", async (req, res) => {
    if(!req.body.sum || !req.body.rate || !req.body.userId || !req.body.gameId || !req.body.username) return res.status(400).json({ ok: false, error: "Недостаточно данных" });
    if(parseInt(req.body.sum) != parseFloat(req.body.sum) || parseInt(req.body.sum) < 1) return res.status(400).json({ ok: false, error: "Неверное количество R$" });

    const cfg = JSON.parse(fs.readFileSync("./config.json")); //Это ппц просто
    if(parseFloat(req.body.rate) != cfg.exchangeRate) return res.status(400).json({ ok: false, error: "Курс был обновлен. Обновите страницу" });

    let cookies = Object.keys(config.stats);
    let sortedByBalance = cookies.sort((a, b) => config.countWithoutReserved(b) - config.countWithoutReserved(a));

    let maxRobuxPerOrder = config.countWithoutReserved(sortedByBalance[0]);
    maxRobuxPerOrder = Math.floor(maxRobuxPerOrder / 100 * 70);
    if(maxRobuxPerOrder < parseInt(req.body.sum)) return res.status(400).json({ ok: false, error: "Робуксы закончились. Обновите страницу" });

    let nearest = sortedByBalance
        .filter(a => config.countWithoutReserved(a) >= Math.ceil(parseInt(req.body.sum) / 70 * 100))
        .sort((a, b) => config.countWithoutReserved(a) - config.countWithoutReserved(b))?.[0];

    let cookie = nearest;

    if(!await checkForPass(Math.ceil(parseInt(req.body.sum) / 70 * 100), req.body.gameId)) {
        res.status(400).json({ ok: false, error: "Мы не нашли подходящего Gamepass'а в вашей игре" });
        return;
    };

    let orderId = hexedSnowflake().toString();
    config.reserve(orderId, cookie, { sum: Math.ceil(parseInt(req.body.sum) / 70 * 100), username: req.body.userId, gameId: req.body.gameId, username: req.body.username });

    let dataArr = [parseInt(req.body.sum) / cfg.exchangeRate, orderId, global.shopId, "RUB", "Покупка " + req.body.sum + " R$. У вас есть 20 минут на оплату, в случае неуспевания, обработка вашего заказа увеличится до 3-х часов.", global.secretKey];
		if(req.body.payType === "payok") {
			let sign = crypto.createHash("md5").update(dataArr.join("|")).digest("hex");

			let data = {
				amount: dataArr[0],
				payment: dataArr[1],
				shop: dataArr[2],
				currency: dataArr[3],
				desc: dataArr[4],
				sign
			};

			res.status(200).json({ ok: true, orderId, link: "https://payok.io/pay?" + querystring.encode(data) });
		} else if(req.body.payType === "gamemoney") {
			console.log("IP: " + req.ip);
			const hash = crypto.createHmac('sha256', 'q7gJzVz2l664lzqe782YOMg8iUWpdp0a')

				// updating data
				.update(
					`amount:${(parseInt(req.body.sum) / cfg.exchangeRate).toFixed(2)};ip:${req.ip};project:322;project_invoice:${orderId};type:qiwi;user:${req.body.username};wallet:G53203729768;`
				)

				// Encoding to be used
				.digest('hex');
			const dataParams = `project=322&type=qiwi&user=${req.body.username}&ip=${req.ip}&amount=${(parseInt(req.body.sum) / cfg.exchangeRate).toFixed(2)}&wallet=G53203729768&project_invoice=${orderId}&signature=${hash}`;
			console.log(dataParams);

		 	await axios.post('https://paygate.gamemoney.com/terminal/create', dataParams)
				.then(data => {
					console.log(data.data);
					res.status(200).json({ ok: true, orderId, link: data.data.url});
				})
				.catch(err => {
					console.log(err);
				});
		}


});

async function checkForPass(sum, gameId) {
    let passes = await parse.fetchPasses(gameId);
    if(!passes.ok || passes.data.length < 1) return false;
    let pass = passes.data.filter(p => p.price == sum)?.[0];
    if(!pass) return false;
    return true;
}

module.exports = router;
