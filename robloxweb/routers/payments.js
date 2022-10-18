const express = require("express");
const router = express.Router();
const crypto = require("crypto");
const axios = require("axios");
const config = require("../helpers/config");
const RobloxUser = require("../robloxApi/user");
const RobloxParser = require("../robloxApi/parse");
const fs = require("fs");

let paymentHook = "https://discord.com/api/webhooks/1024648867125411840/uN4rNgVpJyWhq6XUQaTpwThz7z3AJT-TSkBy_uKdHIjgRBUJ-npQ82cjHe3aey9VbK3p";
let autoHook = "https://discord.com/api/webhooks/1024636975757660190/ddLlMC647ud2et6HH6guTUTjuWkNd97lkwhtAKeOH-527eNV0p46s6EqWFJ6u2aLj_87";

router.post("/notification", async (req, res) => {
    let signCheckArr = [global.secretKey, req.body.desc, req.body.currency, req.body.shop, req.body.payment_id, req.body.amount];
    let sign = crypto.createHash("md5").update(signCheckArr.join("|")).digest("hex");
    if(sign !== req.body.sign) return res.status(401).json({ ok: false, error: "Неверная подпись" });


    let info = config.reserved[req.body.payment_id] ? { ...config.reserved[req.body.payment_id] } : undefined;
    if(!info) return res.status(200).json({ ok: true });

    let date = new Date();
    saveOrder({ id: req.body.payment_id, done: false, userID: info.userId, username: info.username, placeID: info.gameId, amount: req.body.profit, amountOfRobux: Math.floor(info.sum / 100 * 70), type: "transfer", hidden: false, date: date.getTime() });

    await axios.post(paymentHook, {
        content: `@everyone поступил заказ 🔔
Метод: Трансфер 🔁
💸 Оплачено: ${req.body.profit} RUB
🪙 Робуксов к получению ${info.sum} R$
👤 Никнейм: ${info.username}
🕔 Время: ${date.toLocaleString()}
🔗 Ссылка: https://www.roblox.com/games/${info.gameId}/
🆔 Заказа: ${req.body.payment_id}`
    }).catch(e => {});

    if(!checkDate(info)) {
        config.release(req.body.payment_id);
        res.status(200).json({ ok: true });
        return autoError(req.body.payment_id, date, "Робуксы были разрезервированы по истечении 20-и минут.");
    }

    res.status(200).json({ ok: true });

    //автовыдача
    const user = new RobloxUser(info.cookie);
    let inited = await user.init();
    if(!inited.ok) return [
        config.release(req.body.payment_id),
        autoError(req.body.payment_id, date, "Невалид куки")
    ];

    let passes = await RobloxParser.fetchPasses(info.gameId);
    if(!passes.ok || passes.data.length < 1) return [
        config.release(req.body.payment_id),
        autoError(req.body.payment_id, date, "Не удалось спарсить Gamepass'ы")
    ];
    let pass = passes.data.filter(p => p.price == info.sum)?.[0];
    if(!pass) return [
        config.release(req.body.payment_id),
        autoError(req.body.payment_id, date, "Нет подходящего Gamepass'а")
    ];

    let csrf = await user.getCsrfToken();
    if(!csrf.ok) return [
        config.release(req.body.payment_id),
        autoError(req.body.payment_id, date, "Не удалось получить CSRF-токен")
    ];
    let userId = `${info.userId}`;
    let result = await user.buyPass(info.userId, csrf.token, pass);
    if(!result?.ok) return [
        config.release(req.body.payment_id),
        autoError(req.body.payment_id, date, "Не удалось купить Gamepass")
    ];
    await user.revokePass(csrf.token, pass);
    if(config.stats[info.cookie]) config.stats[info.cookie].balance -= info.sum;
    config.release(req.body.payment_id);
    updateOrder(req.body.payment_id);
    await axios.post(autoHook, {
        content: `📤 ${Math.floor(info.sum / 100 * 70)}/${info.sum} R$ игроку ${info.username}
🕔 Время: ${date.toLocaleString()}
🆔 Заказа: ${req.body.payment_id}`
    }).catch(e => {});
});

router.post("/gamemaney-notification", async (req, res) => {
	console.log(req.body);
	
});

function autoError(id, date, content) {
    axios.post(autoHook, {
        content: `@everyone ❌ Не удалось выдать заказ
🕔 Время: ${date.toLocaleString()}
🆔 Заказа: ${id}
❌ Ошибка: ${content}`
    }).catch(e => {});
}

function checkDate(r) {
    return (BigInt(Date.now()) - BigInt(r.date)) < 1000 * 60 * 30;
}

function saveOrder(order){

    let orders = JSON.parse(fs.readFileSync("./orders.json"));
    orders.push(order);

    fs.writeFileSync("./orders.json", JSON.stringify(orders));
}

function updateOrder(id) {

    let orders = JSON.parse(fs.readFileSync("./orders.json"));
    let order1 = orders.map(e => e.id);
    order1 = order1.indexOf(id);
    orders[order1] = {
        ...orders[order1],
        done: true,
    };

    fs.writeFileSync("./orders.json", JSON.stringify(orders));
}

module.exports = router;
