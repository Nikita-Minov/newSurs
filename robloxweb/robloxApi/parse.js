const axios = require("axios");
const cheerio = require("cheerio");

module.exports = {
    async fetchUserIdByUsername(username) {
        let result = await axios.get("https://api.roblox.com/users/get-by-username?username=" + username).catch(e => {});
        if(!result?.data?.Id) return { ok: false };
        return { ok: true, id: result.data.Id };
    },
    async fetchGames(id) {
        let result = await axios.get(`https://games.roblox.com/v2/users/${id}/games?accessFilter=Public&limit=10`).catch(e => {});
        if(!result?.data?.data) return { ok: false };
				const passes = await this.fetchPasses(id);
				console.log(passes);
        return { ok: true, data: result.data.data };
    },
    async fetchPasses(id) {
        let result = await axios.get("https://www.roblox.com/games/getgamepassesinnerpartial?startIndex=0&maxRows=50&placeId=" + id).catch(e => {});
        if(!result?.data) return { ok: false };
        let $ = cheerio.load(result.data);
        let passes = [];
        $("li").each((_, e) => {
            let parent = e.children.filter(e => e.type !== 'text')[0];
            let caption = parent.children.filter(e => e.type !== 'text')[1];
            
            let url = parent.children.filter(e => e.type !== 'text')[0].attribs["href"];
            let data = { id: url.match(/game-pass\/(\d+)/)[1] }

            data.title = caption.children.filter(e => e.type !== 'text')[0].children[0].data.trim();

            let priceCard = caption.children.filter(e => e.type !== 'text')[1];
            data.price = parseInt(priceCard.children.filter(e => e.type !== 'text')[1].children[0].data.trim());
            
            let footer = caption.children.filter(e => e.type !== 'text')[2];
            let button = footer.children.filter(e => e.type !== 'text')[0];
            data.productId = button.attribs["data-product-id"];

            passes.push(data);
        });

        return { ok: true, data: passes };
    }
}