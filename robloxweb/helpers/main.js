const schedule = require("node-schedule");
const updateBalances = require("./updateBalances");


module.exports = async() => {
    schedule.scheduleJob('*/10 * * * *', updateBalances);
    await updateBalances();

    console.log("[INIT] Success");
}
