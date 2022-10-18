const axios = require("axios");
const cheerio = require("cheerio");

module.exports = class RobloxUser { 
    constructor(cookie) {
        this._cookie = cookie;
        this.id = undefined;
        this.withWeb = false;
    }

    async init() {
        let result = await this.fetchUserId();
        if(!result.ok) return { ok: false };
        this.id = result.id;
        return { ok: true };
    }

    get cookie() {
        return `.ROBLOXSECURITY=${this._cookie}; .ROBLOSECURITY=${this._cookie};`;
    }

    async fetchUserId(withWeb = false) {
        let result = await axios.get(`https://${withWeb ? "web." : ""}roblox.com/home`, { headers: { cookie: this.cookie } }).catch(e => {});
        if(!result) return { ok: false };
        let $ = cheerio.load(result.data);
        let id = $("meta[name=user-data]").attr('data-userid');
        if(!id && !withWeb) return await this.fetchUserId(true);
        if(id && withWeb) this.withWeb = true;
        return id ? { ok: true, id } : { ok: false };
    }

    async fetchBalance() {
        if(!this.id) throw new Error("You must init user before fetching balance");
        let result = await axios.get(`https://economy.roblox.com/v1/users/${this.id}/currency`, { headers: { cookie: this.cookie } }).catch(e => {});
        if(!result?.data?.robux && typeof result?.data?.robux !== 'number') return { ok: false };
        return { ok: true, balance: result.data.robux };
    }

    async getCsrfToken() {
        let result = await axios.get(`https://${this.withWeb ? "web." : ""}roblox.com/home`, { headers: { cookie: this.cookie } }).catch(e => {});
        if(!result?.data) return { ok: false };
        let $ = cheerio.load(result.data);
        let token = $("meta[name=csrf-token]").attr('data-token');
        return token ? { ok: true, token } : { ok: false };
    }

    async buyPass(sellerId, csrf, passObj) {
        if(!this.id) throw new Error("You must init user before buying pass");
        let result = await axios.post("https://economy.roblox.com/v1/purchases/products/" + passObj.productId, {
             expectedCurrency: 1, expectedPrice: passObj.price, expectedSellerId: sellerId
        }, { headers: { cookie: this.cookie, 'x-csrf-token': csrf } }).catch(e => {
            console.log(JSON.stringify(e.response.data));
        });
        if(!result?.data || !result.data.purchased) return { ok: false };
        return { ok: true, price: result.data.price };
    }

    async revokePass(csrf, passObj) {
        if(!this.id) throw new Error("You must init user before revoking pass");
        let result = await axios.post("https://www.roblox.com/game-pass/revoke", "id=" + passObj.id, {
            headers: { cookie: this.cookie, 'x-csrf-token': csrf }
        }).catch(e => console.log(e.response));

        if(!result?.data || !result.data.isValid) return { ok: false };
        return { ok: true };
    }
}
