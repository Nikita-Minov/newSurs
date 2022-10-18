const RobloxUser = require("../robloxApi/user");
const config = require("./config");
const snooze = ms => new Promise(res => setTimeout(res, ms));
const hexedSnowflake = require("./hexedSnowflake");

let checkingCookies = [];

module.exports = async function () {
    let result = {};
    let cookies = [...config.cookies];
    cookies = cookies.filter(e => !checkingCookies.includes(e));
    checkingCookies.push(cookies);
    let work = [];
    for(let cookie of cookies) {
        let id = hexedSnowflake();
        work.push({ id, work: new Promise(async res => {
            let user = new RobloxUser(cookie);
            let init = await user.init();
            if(!init.ok) return res(id);
            let balance = await user.fetchBalance();
            if(config.justDeleted && config.justDeleted.includes(cookie)) return res(id);
            if(balance.ok) result[cookie] = { balance: balance.balance, id: user.id };
            else {
                delete config.stats[cookie];
                config.cookies = config.cookies.filter(e => e != cookie);
            }
            Object.keys(result).forEach(e => config.stats[e] = result[e]);
            let index = checkingCookies.indexOf(cookie);
            if(index >= 0) checkingCookies.splice(index, 1);
            res(id);
            await snooze(1000);
        }) });
        if(work.length >= 20) await Promise.any(work.map(e => e.work)).then(r => {
            work = work.filter(w => w.id !== r);
        });
    }
    await Promise.all(work.map(e => e.work));
    config.justDeleted = config.justDeleted?.filter(e => !cookies.includes(e)) || [];
}
