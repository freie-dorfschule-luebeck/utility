const errorHandling = require("../errors");
const cfg = require("./config.json").nick;

module.exports = (nick) => {
    if(!nick) throw new errorHandling.SutekinaError("No nickname entered", 400)
    if(nick.length < cfg.minimum) throw new errorHandling.SutekinaError("Nickname is too short!", 400);
    if(nick.length > cfg.maximum) throw new errorHandling.SutekinaError("Nickname is too long!", 400);
    const regexp = new RegExp(`[^${cfg.allowed_characters.join("")}]`);
    if(regexp.test(nick)) throw new errorHandling.SutekinaError("Nickname can only include alphanumerical characters, spaces or dots!", 400);
    return true;
}