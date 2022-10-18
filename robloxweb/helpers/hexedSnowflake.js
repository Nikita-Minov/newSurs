let i = -1n;
module.exports = () => ((BigInt(Date.now()) << 10n) + ((++i > 0xFFF) ? i = 0n : i)).toString(16);