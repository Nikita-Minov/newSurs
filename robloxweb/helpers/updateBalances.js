const RobloxUser = require("../robloxApi/user");
const config = require("./config");
const snooze = ms => new Promise(res => setTimeout(res, ms));

let checkingCookies = [];
let invalidCookies = [];

module.exports = async function () {
    console.log("[SCHEDULE] Started updateBalances");
    let result = {};
    let cookies = [...config.cookies].filter(e => !checkingCookies.includes(e) && !invalidCookies.includes(e));
    checkingCookies.push(cookies);
    for(let cookie of cookies) {
        if(invalidCookies.includes(cookie)) continue;
        let user = new RobloxUser(cookie);
        let init = await user.init();
        if(!init.ok) { deleteCookie(cookie); continue; }
        let balance = await user.fetchBalance();
        if(config.justDeleted?.includes(cookie)) { deleteCookie(cookie); continue; }
        if(balance.ok) result[cookie] = { balance: balance.balance, id: user.id };
        else { deleteCookie(cookie); continue; }
        Object.keys(result).filter(e => config.justDeleted ? !config.justDeleted.includes(e) : true)
            .forEach(e => config.stats[e] = result[e]);
        let index = checkingCookies.indexOf(cookie);
        if(index >= 0) checkingCookies.splice(index, 1);
        await snooze(1000);
    }

    config.justDeleted = config.justDeleted?.filter(e => !cookies.includes(e)) || [];
}

function deleteCookie(cookie) {
    invalidCookies.push(cookie);
    delete config.stats[cookie];
    config.cookies = config.cookies.filter(e => e != cookie);
}
