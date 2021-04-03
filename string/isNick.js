const errorHandling = require("../errors");
const cfg = require("./config.json").nick;

module.exports = (nick) => {
    if(!nick) throw new errorHandling.SutekinaError("NO_NICK", 400)
    if(nick.length < cfg.minimum) throw new errorHandling.SutekinaError("NICK_TOO_SHORT", 400);
    if(nick.length > cfg.maximum) throw new errorHandling.SutekinaError("NICK_TOO_LONG", 400);
    const regexp = new RegExp(`[^${cfg.allowed_characters.join("")}]`);
    if(regexp.test(nick)) throw new errorHandling.SutekinaError("NICK_INVALID", 400);
    return true;
}
