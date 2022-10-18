let cs = require("../cookies.json");
let reserved = require("../data/reserved.json");
const fs = require("fs");

class Config {
    constructor() {
        this.stats = {};
    }

    get cookies() {
        return cs;
    }

    set cookies(value) {
        cs = value;
        fs.writeFileSync("./cookies.json", JSON.stringify(this.cookies));
    }

    get reserved() {
        return reserved;
    }

    reserve(orderId, cookie, info) {
        reserved[orderId] = { cookie, ...info, date: BigInt(Date.now()).toString() };
        fs.writeFileSync("./data/reserved.json", JSON.stringify(reserved));
    }

    release(orderId) {
        delete reserved[orderId];
        fs.writeFileSync("./data/reserved.json", JSON.stringify(reserved));
    }

    countWithoutReserved(cookie) {
        let res = 0;
        Object.keys(reserved).forEach(r => {
            if(reserved[r].cookie === cookie
                && (BigInt(Date.now()) - BigInt(reserved[r].date)) < 1000 * 60 * 20) res += reserved[r].sum;
        });
        return this.stats[cookie].balance - res;
    }

}

module.exports = new Config();
