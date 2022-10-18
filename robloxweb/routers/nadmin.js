const express = require("express");
const fs = require("fs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const config = require("../helpers/config");
const updateBalances = require("../helpers/updateBalances");
let secret = "c3208ru3x9u(c*#RNU398N9RMAWJIRC3J9";

router.get("/", async (req, res) => {
    res.sendFile( process.cwd() + "/pages/nadmin/index.html");
})

router.post("/auth", async (req, res) => {
   if(!req.body.password) return res.status(401).json({ ok: false, error: "Неверный пароль" });
    const cfg = JSON.parse(fs.readFileSync("./config.json")); //Это ппц просто
    if(req.body.password !== cfg.secretPassword) return res.status(401).json({ ok: false, error: "Неверный пароль" });
    let md5 = crypto.createHash("md5").update(req.body.password).digest("hex");
    let token = jwt.sign({ md5 }, secret);
    res.status(200).json({ ok: true, token });
});

router.use((req, res, next) => {
    try {
        const cfg = JSON.parse(fs.readFileSync("./config.json")); //Это ппц просто
        let md5 = crypto.createHash("md5").update(cfg.secretPassword).digest("hex");
        let tok = req.get("authorization");
        if(!tok) throw new Error();
        let result = jwt.verify(tok, secret);
        if(result.md5 !== md5) throw new Error();
        next();
    } catch {
        res.status(401).json({ ok: false, error: "Не авторизован" });
    }
});

router.get("/cookies", async (req, res) => {
    let cookies = Object.keys(config.stats);
    cookies = cookies.map(c => ({ cookie: c, ...config.stats[c], withoutReserved: config.countWithoutReserved(c) }));

    res.status(200).json({ ok: true, data: cookies });

});

router.delete("/cookies", async (req, res) => {
    config.cookies = config.cookies.filter(c => !req.body.includes(c));
    config.justDeleted = req.body;
    req.body.forEach(c => {
        delete config.stats[c];
    })
    res.status(200).json({ ok: true });
});
router.put("/cookies", async (req, res) => {
   let newC = req.body.filter(e => !config.cookies.includes(e));
   config.cookies = [...config.cookies, ...newC];
   res.status(200).json({ ok: true });
});

router.get("/cookies/update", async (req, res) => {
   await updateBalances();
   res.status(200).json({ ok: true });
});

module.exports = router;
