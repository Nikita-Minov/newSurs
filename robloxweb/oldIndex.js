const { rawListeners } = require("process");

  function round(value, decimals) {
    return Number(Math.ceil(value + "e" + decimals) + "e-" + decimals);
  }
  
  (async () => {
    const puppeteer = require("puppeteer");
  
    const browser = await puppeteer.launch({
                args: ["--shm-size=1gb", "--no-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto("https://roblox.com/");
    await page.setCookie({
      name: ".ROBLOSECURITY",
      value:
        "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_031BB34DE78157A7760A67AE98F2B063178887B462443E1B8664671BF87BC4797B44D6F3F361C0BA0185BF6A63409E6CA00DF3F4C15C46421A96893BC25D4100FE2255FBE5F6B301A03DA1BDD74F390906AF28F67B6433F7AC71B23AA7B672B837B2606CEE273D957072EADDB0D7C8A7325C434C347CE24F5EC010B7A24E1F28D33F0D0AFC37C77D1995DC1F484FAC6C433F49769301EA9E1359444CB79D9E40BBC6EC3299C32AF29215950BF8A8EDE4E3CAD1BB86592E5F0C97001C90AC769BAC85A267B0363297D0C9984A77316326F968B91FCD7EE3D46D10DEC3A10A2D3321AC8450017FCE8F5C859165A6D1BB775AF4FCD39046EFBFF89E281924852FA69711C49EAF77A03B9D3AF08F14A574A143544A7FBFFE61966122FDBF2860CEF02E552D053916BF70D7F4876B501D24EE6B2E3A1DC76464E56433DB7D48A90019EA8704D76C3F5D5ED5660CFBD8144AC00EAA3233F8B1CDDD8C43B863A97012DF946556D8647FCACFC4C81E91B23B46388968C84A",
      domain: ".roblox.com",
      path: "/",
      secure: true,
      httpOnly: true,
      expires: Date.now() + 10 * 365 * 24 * 60 * 60,
      session: false,
    });
    await page.close();
  
    const schedule = require("node-schedule");
    const groupJobs = [];
    const transferJobs = [];
  
    const { PAYOK } = require("payok");
    const payok = new PAYOK({
      secretKey: "d71b89dde88d6b6fb6cf2b3483c89728",
      shop: 2247,
    });
    const hookcord = require("hookcord");
    const Hook = new hookcord.Hook();
    Hook.login(
      "1014589188127076443",
      "gqAgayMPucrfT3ZLQ6i7i7QNQffyF8JUhYV22xhvzpZIE67Pk8oN2kqaids741JKn_IC"
    );
  
    const NotifyHook = new hookcord.Hook();
  
    NotifyHook.login(
      "1014589469011226784",
      "0y35qJXmAAlRkfB6sQzfZaWphvEOTgSJPOwFVWPpvXenoDVitr7xPKoaayrTzl0-6r-u"
    );

    const AutoHook = new hookcord.Hook();
    AutoHook.login(
      "1015918178636943360",
      "TxXYvLPIADPkqWmEbTa6wsUw3j5VfzSlGRtl4V33uz1iFfn2MOXIBphauYgeKH1bjyTI"
    )
    /*const notifyHook = new Webhook('https://discord.com/api/webhooks/1010980697760071680/KdV86YwG_2AKHKxHHcnGDgaYvaNRmsVL2U-aAKx0JXiB6fLJdtQBKhCk5MAi7gqjKvdA')
  notifyHook.setUsername('Новые поступления')
  notifyHook.setAvatar('')*/
    const fetch = require("node-fetch");
    const fs = require("fs");
    const md5 = require("md5");
    const url = require("url");
    const noblox = require("noblox.js");
    try {
      noblox.setCookie(
        "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_61F2AB9D8F474082F9B75D9FC7E9BAEBC4AB54AD160CECD545DC1661B86E618AFEFEAED7E0896A157347C494E577CB9317E7694CB04FC422D1AC0B6B6BE83AFFC90C80943A32D778392131C15B25310606DB28D9145BE31E15163739DEB4C97D6C391634AA3F2415E29757C90EEE288EC616D12C1C1894189E925BE9A4B2083167ED5975C916E3EB98DF975107AB8F95F5A2A384D07B044AB85A5995AA274121B96C691113234F60B09799A5AA1BD57FE71AF2D15DB832105F539828E365620904C89531CB0AAB9674E818C856DBEB67AF9F84C23F3229C1F84301EE30031CDDA7B8819FCA5D170F25565929A7B439A47A81608EB2CEC9D6078FAB41D50A718504EB3B3855EDB091625B119DF5812F572A96E2DBCF83E731668AA6C9FBDE3363BEE2109CB11F698C260EC0EEB3A4509621E77C91B49048E6F23EDF2D1B581B88FBF2F83F79A0FC1CEB06F35C16A628791A30366F892699153BF3F34C254AF7290C72E793A65CC9C36120BAC2576977914E2F15E4"
      );
    } catch (err) {}
  
    const axios = require("axios");
    const { JSDOM } = require("jsdom");
  
    const payGroupIfCan = async (userID, orderID, jobID) => {
      const orders = JSON.parse(
        fs.readFileSync(__dirname + "/orders.json")
      );
      console.log(`Выполняется автоматическое пополнение группой пользователя ${await noblox.getUsernameFromId(userID)}...`);
      console.log(`Время попытки: ${new Date()}`)
      const { groupID } = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
      axios
        .post(
          `https://auth.roblox.com/v2/logout`,
          {},
          {
            headers: {
              Cookie:
                ".ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_031BB34DE78157A7760A67AE98F2B063178887B462443E1B8664671BF87BC4797B44D6F3F361C0BA0185BF6A63409E6CA00DF3F4C15C46421A96893BC25D4100FE2255FBE5F6B301A03DA1BDD74F390906AF28F67B6433F7AC71B23AA7B672B837B2606CEE273D957072EADDB0D7C8A7325C434C347CE24F5EC010B7A24E1F28D33F0D0AFC37C77D1995DC1F484FAC6C433F49769301EA9E1359444CB79D9E40BBC6EC3299C32AF29215950BF8A8EDE4E3CAD1BB86592E5F0C97001C90AC769BAC85A267B0363297D0C9984A77316326F968B91FCD7EE3D46D10DEC3A10A2D3321AC8450017FCE8F5C859165A6D1BB775AF4FCD39046EFBFF89E281924852FA69711C49EAF77A03B9D3AF08F14A574A143544A7FBFFE61966122FDBF2860CEF02E552D053916BF70D7F4876B501D24EE6B2E3A1DC76464E56433DB7D48A90019EA8704D76C3F5D5ED5660CFBD8144AC00EAA3233F8B1CDDD8C43B863A97012DF946556D8647FCACFC4C81E91B23B46388968C84A",
            },
          }
        )
        .catch(async (err) => {
          const csrfToken = err.response.headers["x-csrf-token"];
          try {
            console.log({
              PayoutType: "FixedAmount",
              Recipients: [
                {
                  recipientId: userID,
                  recipientType: "User",
                  amount: orders[orderID].amountOfRobux,
                },
              ],
            })
            const result = await axios.post(
              `https://groups.roblox.com/v1/groups/${groupID}/payouts`,
              {
                PayoutType: "FixedAmount",
                Recipients: [
                  {
                    recipientId: userID,
                    recipientType: "User",
                    amount: orders[orderID].amountOfRobux,
                  },
                ],
              },
              {
                headers: {
                  "X-CSRF-TOKEN": csrfToken,
                  Cookie:
                    ".ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_031BB34DE78157A7760A67AE98F2B063178887B462443E1B8664671BF87BC4797B44D6F3F361C0BA0185BF6A63409E6CA00DF3F4C15C46421A96893BC25D4100FE2255FBE5F6B301A03DA1BDD74F390906AF28F67B6433F7AC71B23AA7B672B837B2606CEE273D957072EADDB0D7C8A7325C434C347CE24F5EC010B7A24E1F28D33F0D0AFC37C77D1995DC1F484FAC6C433F49769301EA9E1359444CB79D9E40BBC6EC3299C32AF29215950BF8A8EDE4E3CAD1BB86592E5F0C97001C90AC769BAC85A267B0363297D0C9984A77316326F968B91FCD7EE3D46D10DEC3A10A2D3321AC8450017FCE8F5C859165A6D1BB775AF4FCD39046EFBFF89E281924852FA69711C49EAF77A03B9D3AF08F14A574A143544A7FBFFE61966122FDBF2860CEF02E552D053916BF70D7F4876B501D24EE6B2E3A1DC76464E56433DB7D48A90019EA8704D76C3F5D5ED5660CFBD8144AC00EAA3233F8B1CDDD8C43B863A97012DF946556D8647FCACFC4C81E91B23B46388968C84A",
                },
              }
            );
            const config = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
            orders[orderID].done = true;
            config.groupMinus = Number(config.groupMinus) - toFixedNum(Number(orders[orderID].amountOfRobux));
            config.groupMinus = parseInt(config.groupMinus,10);
            fs.writeFileSync(__dirname + "/config.json", JSON.stringify(config))
            const dateObj = new Date();
            AutoHook.setPayload({
              content: ` Отправлено ${orders[orderID].amountOfRobux} робуксов на никнейм ${await noblox.getUsernameFromId(userID)}\n${dateObj.getDate()}.${(
                "0" +
                (dateObj.getMonth() + 1)
              ).slice(-2)}.${dateObj.getFullYear()}, ${dateObj.getHours()}:${(
                "0" + dateObj.getMinutes()
              ).slice(-2)}`,
            });
            AutoHook.fire();
            console.log("Автоматическое пополнение удалось.");
            if (jobID) {
              let jobsFile = JSON.parse(
                fs.readFileSync(__dirname + "/jobs.json")
              );
              jobsFile = jobsFile.filter((job) => job.jobID !== jobID);
  
              fs.writeFileSync(
                __dirname + "/jobs.json",
                JSON.stringify(jobsFile)
              );
            }
            fs.writeFileSync(__dirname + "/orders.json", JSON.stringify(orders));
          } catch (err) {
            if (
              err.response?.status === 400 &&
              err.response?.data?.errors[0]?.code === 34
            ) {
              console.log(
                "Ошибка, пользователь в группе меньше 16 дней. Запускаю планирование на 2 дня."
              );
              const date = new Date();
              const id = Date.now();
              date.setDate(date.getDate() + 2);
              groupJobs.push(
                schedule.scheduleJob(date, () => {
                  payGroupIfCan(userID, orderID, id);
                })
              );
              let jobsFile = JSON.parse(
                fs.readFileSync(__dirname + "/jobs.json")
              );
              if (jobID) {
                jobsFile = jobsFile.filter((job) => job.jobID !== jobID);
              }
              jobsFile.push({ userID, orderID, date, jobID: id });
              fs.writeFileSync(
                __dirname + "/jobs.json",
                JSON.stringify(jobsFile)
              );
            } else{
              console.log(
                "Неизвестная ошибка"
              );
            }
          }
        });
    };
    const previousJobs = JSON.parse(fs.readFileSync(__dirname + "/jobs.json"));
    previousJobs.forEach((job) => {
      if (new Date(job.date) <= new Date()) {
        return payGroupIfCan(job.userID, job.orderID, job.jobID);
      }
      schedule.scheduleJob(new Date(job.date), () => {
        payGroupIfCan(job.userID, job.orderID, job.jobID);
      });
    });
    const express = require("express");
    const app = express();
    const server = require("http").createServer(app);
    const { Server } = require("socket.io");
    const io = new Server(server);
    let usersCount = 0;
  
    let connections = [];
    io.on("connection", (socket) => {
      usersCount++;
      connections.push(socket);
      io.emit("new", usersCount);
      socket.on("disconnect", () => {
        usersCount--;
        connections = connections.filter(
          (connection) => connection.id !== socket.id
        );
        io.emit("quit", usersCount);
      });
    });
    app.use(express.json());
    app.use("/files", express.static("files"));
  
    app.use("/assets", express.static("assets"));
    app.use("/webfonts", express.static("webfonts"));
    app.get("/favicon.png", (req, res) =>
      res.sendFile(__dirname + "/files/favicon.png")
    );
    const visibleRoutes = [
      "/buy",
      "/success",
      "/fail",
      "/faq",
      "/support",
      "/my-purchases",
      "/agreement",
      "/privacy",
      "/contacts",
      "/status",
      "/en",
      "/en/buy",
      "/en/faq",
      "/en/support",
      "/en/my-purchases",
      "/en/agreement",
      "/en/privacy",
      "/en/contacts",
      "/en/status",
    ];
  
    for (const route of visibleRoutes) {
      app.get(route, (req, res) => {
        res.sendFile(`${__dirname}/pages${route}/index.html`);
      });
    }
    app.get("/my-purchases/*", (req, res) => {
      res.sendFile(`${__dirname}/pages/my-purchases/search/index.html`);
    });
    app.get("/en/my-purchases/*", (req, res) => {
      res.sendFile(`${__dirname}/pages/en/my-purchases/search/index.html`);
    });
    app.get("/group", async (req, res) => {
      const { groupID } = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
  
      const { name } = await noblox.getGroup(groupID);
      const logo = await noblox.getLogo(groupID);
  
      const funds = await noblox.getGroupFunds(groupID);
      res.json({ logo, name, funds, id: groupID });
    });
    app.post('/bought16',async(req,res)=>{
      const { username } = req.body;
      if (!/^[a-z_0-9]+$/i.test(username)) return res.json({ bought: false });
      console.log(username)
      let userID;
      try{

      userID = await noblox.getIdFromUsername(username);
      }catch(err){
        return res.json({ bought: false });
      }
      const orders = JSON.parse(fs.readFileSync(__dirname + "/orders.json"));
      const order = orders.find(order => order.userID === userID);
      if(!order) return res.json({ bought: false });
      const date = new Date(order.date);
      console.log(order.date)
      res.json({ bought:new Date(date.getTime() + 1.3824 * 10e8) < new Date()})
    })
    app.post("/isingroup", async (req, res) => {
      const { username } = req.body;
      if (!/^[a-z_0-9]+$/i.test(username)) return res.json({ ingroup: false });
      const { groupID } = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
      try {
        const userID = await noblox.getIdFromUsername(username);
        const groups = await noblox.getGroups(userID);
        res.json({
          ingroup: groups.findIndex((group) => group.Id == groupID) > -1,
        });
      } catch (err) {
        if (err.message === "User not found") {
          return res.json({ error: "user not found" });
        }
      }
    });
  
    app.post("/canceltransferjobs", (req, res) => {
      transferJobs.forEach((j) => j.cancel());
  
      res.json({ status: "ok" });
    });
    //const toFixedNum = (num) => num.toString().split('.')[1]?.length > 1 ? Math.round(num / 10) * 10 : num;
    function toFixedNum(value) {
      return Math.round(value);
    }
  
    app.get("/statistics", async (req, res) => {
      const {
        availableRobux: available,
        groupID,
        exchangeRate,
        dollarExchangeRate,
        groupExchangeRate,
        groupMinus,
        isGroupAvailable
      } = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
      const groupAvailable = await noblox.getGroupFunds(groupID);
      
      const file = JSON.parse(fs.readFileSync(__dirname + "/orders.json"));
      let selled = 0;
      file.forEach((obj) => (selled += obj.amountOfRobux));
      res.json({
        available: toFixedNum(available),
        selled: toFixedNum(selled),
        online: usersCount,
        exchangeRate,
        groupAvailable: toFixedNum(groupAvailable - Number(groupMinus)),
        groupExchangeRate,
        dollarExchangeRate,
        isGroupAvailable: isGroupAvailable === false || isGroupAvailable === 'false' ? false : true,
      });
    });
    app.get("/lastorders", (req, res) => {
      let file = JSON.parse(fs.readFileSync(__dirname + "/orders.json"));
      const { ordersLineLimit } = JSON.parse(
        fs.readFileSync(__dirname + "/config.json")
      );
      const result = file
        .slice(-ordersLineLimit)
        .map((obj, index) => {
          const username =
            obj.username.length > 3
              ? obj.username.substring(0, Math.round((obj.username.length - 3) / 2)) +
                "*".repeat(3) +
                obj.username.substr(obj.username.length - Math.round((obj.username.length - 3) / 2))
              : "*".repeat(obj.username.length);
          const amountOfRobux = toFixedNum(obj.amountOfRobux);
          return {
            username,
            amountOfRobux,
            type: obj.type,
          };
        })
        .reverse();
      res.json({ result });
    });
    app.get("/ss", async (req, res) => {
      const page = await browser.newPage();
      await page.goto(
        "https://www.roblox.com/games/7216249808/Join-to-the-SCD-Clothing",
        { waitUntil: "networkidle0" }
      );
      const data = await page.evaluate(
        () => document.querySelector("*").outerHTML
      );
      await page.close();
      res.end(data);
    });
    app.post("/isrightprice", async (req, res) => {
      const { id, expected_price } = req.body;
      const page = await browser.newPage();
      await page.goto(`https://www.roblox.com/games/${id}`);
      await page
        .waitForSelector(".text-robux", { timeout: 2000 })
        .then(async () => {
          const price = await page.$eval(
            ".text-robux",
            (element) => element.innerText
          );
          await page.close();
          res.json({ isRightPrice: expected_price === Number(price) });
        })
        .catch((err) => {
          res.json({ isRightPrice: false });
        });
    });
    app.get("/processbuy", (req, res) => {
      const id = new Date().getTime();
      const { shopID, shopToken, availableRobux } = JSON.parse(
        fs.readFileSync(__dirname + "/config.json")
      );
      const data = {};
      data.amount = req.query.amount;
      data.payment = String(id);
      data.shop = shopID;
      data.currency = "RUB";
      data.desc = "Робуксы";
      data.secret = shopToken;
      const arr = [];
      for (const value of Object.values(data)) {
        arr.push(value);
      }
      delete data.secret;
      delete req.query.amount;
      const prepared = arr.join("|");
      res.redirect(
        url.format({
          pathname: "https://payok.io/pay",
          query: {
            ...data,
            sign: md5(prepared),
            success_url: "https://rbxsell.ru/success",
            method: "card",
            username: req.query.username,
            placeID: req.query.placeID || "none",
  
            type: req.query.type === "group" ? "group" : "transfer",
            promocode: req.query.promocode || "none",
          },
        })
      );
    });
  
    app.post("/my-purchases", async (req, res) => {
      const { id } = req.body;
      const file = JSON.parse(fs.readFileSync(__dirname + "/orders.json"));
      let purchases = file.filter(
        (obj) => obj.username.toLowerCase() === id.toLowerCase()
      );
  
      purchases = purchases.map(
        ({ placeID, amountOfRobux, amount, date, done, type, id }) => ({
          amountOfRobux: toFixedNum(amountOfRobux),
          date,
          done,
          type,
          id,
          isRightPrice:true
        })
      );
      res.json({ purchases: purchases.reverse().slice(0,10) });
    });
    const getOptimalPlacePrice = (robuxNum) => {
      const robux = Math.floor(robuxNum);
      if (robux <= 350) return robux;
  
      const sequence = [...Array(robux + 1).keys()].slice(1);
      let divisor;
      for (const num of sequence) {
        if (robux / num < 350) {
          divisor = Math.floor(num);
          break;
        }
      }
      return Math.floor(robux / divisor);
    };
    const getPriceWithFee = (price) => {
      return Math.ceil(price / 0.7);
    };
    app.post("/getplace", async (req, res) => {
      try {
        const { username, robux } = req.body;
  
        if (!/^[a-zA-Z_0-9]+$/i.test(username))
          return res.json({ message: "error" });
        if (robux % 2 !== 0 || !username) return res.json({ message: "error" });
        const price = getOptimalPlacePrice(Number(robux));
        const priceWithFee = getPriceWithFee(price);
        const userID = await noblox.getIdFromUsername(username);
        const response = await axios.get(
          `https://www.roblox.com/users/${userID}/profile#!/creations`
        );
        const dom = new JSDOM(response.data);
        const document = dom.window.document;
        const placeID = document.querySelector("#games-switcher img").dataset
          .emblemId;
        res.json({ price, priceWithFee, fee: priceWithFee - price, placeID });
      } catch (err) {
        if (
          err.message === "Request failed with status code 404" ||
          err.message === "User not found"
        ) {
          return res.json({ message: "user not found" });
        }
        res.json({ message: "error" });
      }
    });
    app.post("/checkpromocode", (req, res) => {
      const { value } = req.body;
      const { promocodes } = JSON.parse(
        fs.readFileSync(__dirname + "/config.json")
      );
      const object = promocodes.find((obj) => obj.value === value);
      if (object) {
        res.json({ exists: true, discount: object.discount });
      } else {
        res.json({ exists: false });
      }
    });
    /** Order schema:
  {
      id: number;
      done: boolean;
      nickname: string;
      amount: number;
      amountOfRobux: number;
      hidden: boolean;
      date: string;
  }
  **/
  
    const adminRoutes = express.Router();
    const unless = function (middleware) {
      return function (req, res, next) {
        if (req.method === "GET") {
          return next();
        } else {
          return middleware(req, res, next);
        }
      };
    };
    const checkPassword = (req, res, next) => {
      const { secretPassword } = JSON.parse(
        fs.readFileSync(__dirname + "/config.json")
      );
      if (req.body.password !== secretPassword) {
        res.sendStatus(403);
      } else {
        next();
      }
    };
    adminRoutes.use(unless(checkPassword));
    adminRoutes.get("/", (req, res) => {
      res.sendFile(__dirname + "/pages/admin/index.html");
    });
    adminRoutes.post("/togglegroupjobs", (req, res) => {
      const config = JSON.parse(
        fs.readFileSync(__dirname + "/config.json", "utf8")
      );
      config.autoGroup = !config.autoGroup;
      if (!config.autoGroup) {
        groupJobs.forEach((j) => j.cancel());
        groupJobs.length = 0;
        fs.writeFileSync(__dirname + "/jobs.json", "[]");
      }
      fs.writeFileSync(__dirname + "/config.json", JSON.stringify(config));
      res.json({ status: "ok" });
    });
    adminRoutes.post("/", (req, res) => {
      const file = JSON.parse(fs.readFileSync(__dirname + "/orders.json"));
      res.json(
        JSON.stringify(
          file
            .filter((obj) => !obj.hidden)
            .map((obj) => {
              const optimal = getOptimalPlacePrice(obj.amountOfRobux);
              return {
                ...obj,
                optimal,
                times: Math.floor(obj.amountOfRobux / optimal),
              };
            })
        )
      );
    });
    adminRoutes.post("/toggledone", (req, res) => {
      const { id } = req.body;
      const file = JSON.parse(fs.readFileSync(__dirname + "/orders.json"));
      const config = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
      const index = file.findIndex((obj) => obj.id === id);
      if (index === -1) return res.sendStatus(404);
      const doneToggled = !file[index].done;
      file[index].done = doneToggled;
  
      fs.writeFileSync(__dirname + "/orders.json", JSON.stringify(file));
      res.json({ done: doneToggled });
    });
    adminRoutes.post("/notify", async (req, res) => {
      const dateObj = new Date();
      const { availableRobux } = JSON.parse(
        fs.readFileSync(__dirname + "/config.json")
      );
      NotifyHook.setPayload({
        content: `<@&1014784602637860955> Завоз робуксов на сайте.\nНаличие ${availableRobux} R$\nМетод трансфер\nВремя ${dateObj.getDate()}.${(
          "0" +
          (dateObj.getMonth() + 1)
        ).slice(-2)}.${dateObj.getFullYear()}, ${dateObj.getHours()}:${(
          "0" + dateObj.getMinutes()
        ).slice(-2)}\nСайт https://rbxsell.ru`,
      });
      NotifyHook.fire();
      res.sendStatus(200);
    });
    adminRoutes.delete("/", (req, res) => {
      const { id } = req.body;
      let file = JSON.parse(fs.readFileSync(__dirname + "/orders.json"));
      const index = file.findIndex((obj) => obj.id === id);
      if (index === -1) return res.sendStatus(404);
      file[index].hidden = true;
      fs.writeFileSync(__dirname + "/orders.json", JSON.stringify(file));
      res.sendStatus(200);
    });
    adminRoutes.post("/config", (req, res) => {
      const file = fs.readFileSync(__dirname + "/config.json");
      res.json(JSON.parse(file));
    });
    adminRoutes.put("/config", (req, res) => {
      const { config } = req.body;
      const file = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
      for (const [key, value] of Object.entries(config)) {
        file[key] = value;
      }
      fs.writeFileSync(__dirname + "/config.json", JSON.stringify(file));
      res.sendStatus(200);
    });
    adminRoutes.post('/sendrobuxesgroup',async (req,res)=>{
      const {orderID} = req.body;
      const orders = JSON.parse(
        fs.readFileSync(__dirname + "/orders.json")
      );
      let userID = orders[orderID].userID;
      if(!userID){
        userID = await noblox.getIdFromUsername(orders[orderID].username)
      }
      const { groupID } = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
      axios
        .post(
          `https://auth.roblox.com/v2/logout`,
          {},
          {
            headers: {
              Cookie:
                ".ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_031BB34DE78157A7760A67AE98F2B063178887B462443E1B8664671BF87BC4797B44D6F3F361C0BA0185BF6A63409E6CA00DF3F4C15C46421A96893BC25D4100FE2255FBE5F6B301A03DA1BDD74F390906AF28F67B6433F7AC71B23AA7B672B837B2606CEE273D957072EADDB0D7C8A7325C434C347CE24F5EC010B7A24E1F28D33F0D0AFC37C77D1995DC1F484FAC6C433F49769301EA9E1359444CB79D9E40BBC6EC3299C32AF29215950BF8A8EDE4E3CAD1BB86592E5F0C97001C90AC769BAC85A267B0363297D0C9984A77316326F968B91FCD7EE3D46D10DEC3A10A2D3321AC8450017FCE8F5C859165A6D1BB775AF4FCD39046EFBFF89E281924852FA69711C49EAF77A03B9D3AF08F14A574A143544A7FBFFE61966122FDBF2860CEF02E552D053916BF70D7F4876B501D24EE6B2E3A1DC76464E56433DB7D48A90019EA8704D76C3F5D5ED5660CFBD8144AC00EAA3233F8B1CDDD8C43B863A97012DF946556D8647FCACFC4C81E91B23B46388968C84A",
            },
          }
        )
        .catch(async (err) => {
          const csrfToken = err.response.headers["x-csrf-token"];
          try {
            console.log({
              PayoutType: "FixedAmount",
              Recipients: [
                {
                  recipientId: userID,
                  recipientType: "User",
                  amount: orders[orderID].amountOfRobux,
                },
              ],
            })
            const result = await axios.post(
              `https://groups.roblox.com/v1/groups/${groupID}/payouts`,
              {
                PayoutType: "FixedAmount",
                Recipients: [
                  {
                    recipientId: userID,
                    recipientType: "User",
                    amount: orders[orderID].amountOfRobux,
                  },
                ],
              },
              {
                headers: {
                  "X-CSRF-TOKEN": csrfToken,
                  Cookie:
                    ".ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_031BB34DE78157A7760A67AE98F2B063178887B462443E1B8664671BF87BC4797B44D6F3F361C0BA0185BF6A63409E6CA00DF3F4C15C46421A96893BC25D4100FE2255FBE5F6B301A03DA1BDD74F390906AF28F67B6433F7AC71B23AA7B672B837B2606CEE273D957072EADDB0D7C8A7325C434C347CE24F5EC010B7A24E1F28D33F0D0AFC37C77D1995DC1F484FAC6C433F49769301EA9E1359444CB79D9E40BBC6EC3299C32AF29215950BF8A8EDE4E3CAD1BB86592E5F0C97001C90AC769BAC85A267B0363297D0C9984A77316326F968B91FCD7EE3D46D10DEC3A10A2D3321AC8450017FCE8F5C859165A6D1BB775AF4FCD39046EFBFF89E281924852FA69711C49EAF77A03B9D3AF08F14A574A143544A7FBFFE61966122FDBF2860CEF02E552D053916BF70D7F4876B501D24EE6B2E3A1DC76464E56433DB7D48A90019EA8704D76C3F5D5ED5660CFBD8144AC00EAA3233F8B1CDDD8C43B863A97012DF946556D8647FCACFC4C81E91B23B46388968C84A",
                },
              }
            );
            const config = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
            orders[orderID].done = true;
            config.groupMinus = Number(config.groupMinus) - toFixedNum(Number(orders[orderID].amountOfRobux));
            config.groupMinus = parseInt(config.groupMinus,10);
            fs.writeFileSync(__dirname + "/config.json", JSON.stringify(config))
            
            
            fs.writeFileSync(__dirname + "/orders.json", JSON.stringify(orders));
            res.json({message:'ok'})
          } catch (err) {
            console.log(err.response.data.errors)
            if (
              err.response?.status === 400 &&
              err.response?.data?.errors[0]?.code === 34
            ) {
              
              res.json({message:"16 days"})
              
            } else{
              res.json({message:'error'})
            }
          }
        });
    })
    
    app.use("/admin", adminRoutes);
    app.get("/", (req, res) => {
      res.sendFile(__dirname + "/pages/index.html");
    });
    server.listen(3000);
  
    const payTransferIfCan = async (orderID) => {
      //const { groupID } = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
      const orders = JSON.parse(
        fs.readFileSync(__dirname + "/orders.json")
      );
      const order = orders[Number(orderID)];
      const expectedPrice = order.amountOfRobux;
      const placeID = order.placeID;
      const page = await browser.newPage();
      await page.goto(`https://www.roblox.com/games/${placeID}`);
      await page
        .waitForSelector(".text-robux", { timeout: 2000 })
        .then(async () => {
          const price = await page.$eval(
            ".text-robux",
            (element) => element.innerText
          );
          await page.close();
          if (expectedPrice !== Number(price)) {
            return {message:"price not match"}
          }
          axios
            .post(
              `https://auth.roblox.com/v2/logout`,
              {},
              {
                headers: {
                  Cookie:
                    ".ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_031BB34DE78157A7760A67AE98F2B063178887B462443E1B8664671BF87BC4797B44D6F3F361C0BA0185BF6A63409E6CA00DF3F4C15C46421A96893BC25D4100FE2255FBE5F6B301A03DA1BDD74F390906AF28F67B6433F7AC71B23AA7B672B837B2606CEE273D957072EADDB0D7C8A7325C434C347CE24F5EC010B7A24E1F28D33F0D0AFC37C77D1995DC1F484FAC6C433F49769301EA9E1359444CB79D9E40BBC6EC3299C32AF29215950BF8A8EDE4E3CAD1BB86592E5F0C97001C90AC769BAC85A267B0363297D0C9984A77316326F968B91FCD7EE3D46D10DEC3A10A2D3321AC8450017FCE8F5C859165A6D1BB775AF4FCD39046EFBFF89E281924852FA69711C49EAF77A03B9D3AF08F14A574A143544A7FBFFE61966122FDBF2860CEF02E552D053916BF70D7F4876B501D24EE6B2E3A1DC76464E56433DB7D48A90019EA8704D76C3F5D5ED5660CFBD8144AC00EAA3233F8B1CDDD8C43B863A97012DF946556D8647FCACFC4C81E91B23B46388968C84A",
                },
              }
            )
            .catch(async (err) => {
              if (err.response.status === 401) console.log("Проблема с куками.");
              const csrfToken = err.response.headers["x-csrf-token"];
              try {
                const result = await axios.post(
                  `https://games.roblox.com/v1/games/vip-servers/${placeID}`,
                  {
                    name: "Bought by RBXsell.ru",
                    expectedPrice,
                  },
                  {
                    headers: {
                      "X-CSRF-TOKEN": csrfToken,
                      Cookie:
                        ".ROBLOSECURITY=_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_031BB34DE78157A7760A67AE98F2B063178887B462443E1B8664671BF87BC4797B44D6F3F361C0BA0185BF6A63409E6CA00DF3F4C15C46421A96893BC25D4100FE2255FBE5F6B301A03DA1BDD74F390906AF28F67B6433F7AC71B23AA7B672B837B2606CEE273D957072EADDB0D7C8A7325C434C347CE24F5EC010B7A24E1F28D33F0D0AFC37C77D1995DC1F484FAC6C433F49769301EA9E1359444CB79D9E40BBC6EC3299C32AF29215950BF8A8EDE4E3CAD1BB86592E5F0C97001C90AC769BAC85A267B0363297D0C9984A77316326F968B91FCD7EE3D46D10DEC3A10A2D3321AC8450017FCE8F5C859165A6D1BB775AF4FCD39046EFBFF89E281924852FA69711C49EAF77A03B9D3AF08F14A574A143544A7FBFFE61966122FDBF2860CEF02E552D053916BF70D7F4876B501D24EE6B2E3A1DC76464E56433DB7D48A90019EA8704D76C3F5D5ED5660CFBD8144AC00EAA3233F8B1CDDD8C43B863A97012DF946556D8647FCACFC4C81E91B23B46388968C84A",
                    },
                  }
                );
                
                const config = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
                
                orders[orderID].done = true;
                config.groupMinus = Number(config.groupMinus) - toFixedNum(parseInt(orders[orderID].amountOfRobux,10));
                config.groupMinus = parseInt(config.groupMinus,10);
                fs.writeFileSync(
                  __dirname + "/orders.json",
                  JSON.stringify(orders)
                );
                fs.writeFileSync(
                  __dirname + "/config.json",
                  JSON.stringify(orders)
                );
                return {message:'ok'}
              } catch (err) {
                console.log(err.response)
                return {message:'error'}
              }
            });
        })
        .catch((err) => {console.log(1,err.response)
          return {message:'error'}
        });
    };
    payok.createWebhook(3002, async (payment) => {
      /*{
        payment_id: '51387-77a3-d3724',
        shop: '2000',
        amount: '10',
        profit: '10',
        desc: 'Описание вашего товара',
        currency: 'RUB',
        currency_amount: '10.69',
        sign: 'b7453a35683171d235dfb13a16b61f41',
        email: 'email@gmail.ru',
        date: '11.06.2022 12:13:15',
        method: 'Qiwi', 
        custom: { id: '123456' } 
    }*/
      const {
        shopToken,
        groupID,
        promocodes,
        exchangeRate,
        groupExchangeRate,
        autoGroup,
        autoTransfer,
      } = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
      const file = JSON.parse(fs.readFileSync(__dirname + "/orders.json"));
      const {
        amount,
        custom: { username, placeID, type, promocode },
      } = payment;
      const today = new Date();
      const date = Date.now();
  
      const userID = await noblox.getIdFromUsername(username);
      const order = {
        id: file[file.length - 1]?.id + 1 || 0,
        done: false,
        userID,
        username,
        placeID: placeID === "none" ? undefined : placeID,
        amount,
        amountOfRobux: round(
          amount * (type === "group" ? groupExchangeRate : exchangeRate),
          0
        ),
        type,
        hidden: false,
        date,
      };
      console.log(order)
      if (promocode !== "none") {
        const foundPromocode = promocodes.find((obj) => obj.value === promocode);
        if (foundPromocode) {
          order.hasPromocode = true;
          order.amountOfRobux =
            order.amountOfRobux / (1 - foundPromocode.discount * 0.01);
        }
      }
  
      file.push(order);
      fs.writeFileSync(__dirname + "/orders.json", JSON.stringify(file));
  
      const conf = JSON.parse(fs.readFileSync(__dirname + "/config.json"));
      if (order.type === "transfer") {
        conf.availableRobux -= order.amountOfRobux;
        conf.availableRobux = Math.max(conf.availableRobux, 0);
      } else if(order.type === 'group'){
        
        conf.groupMinus = parseInt(conf.groupMinus, 10) + toFixedNum(parseInt(order.amountOfRobux, 10));
        conf.groupMinus = parseInt(conf.groupMinus,10);
      }
      fs.writeFileSync(__dirname + "/config.json", JSON.stringify(conf));
      if (order.type === "group" && autoGroup) {
        console.log("Автоматическое пополнение группой ВКЛЮЧЕНО.");
        payGroupIfCan(order.userID, order.id);
      }
      if (/*order.type === "transfer" && autoTransfer*/ false) {
        payTransferIfCan(order.placeID, amountOfRobux, order.id);
      }
      const dateObj = new Date(date);
      const messageContent = `@everyone поступил заказ\nМетод: ${
        type === "group" ? "Группа" : "Трансфер"
      }\nЗаплачено: ${amount} RUB\nРобуксов к получению ${Math.round(
        order.amountOfRobux
      )} R$\nНикнейм: ${username}\nВремя: ${dateObj.getDate()}.${(
        "0" +
        (dateObj.getMonth() + 1)
      ).slice(-2)}.${dateObj.getFullYear()}, ${dateObj.getHours()}:${(
        "0" + dateObj.getMinutes()
      ).slice(-2)}${
        type === "transfer"
          ? `\nСсылка: https://www.roblox.com/games/${order.placeID}/`
          : ""
      }`;
      Hook.setPayload({
        content: messageContent,
      });
      Hook.fire();
    });
  })();
    
