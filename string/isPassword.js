const errorHandling = require("../errors");
const cfg = require("./config.json").password;

module.exports = (password) => {
    if(!password) throw new errorHandling.SutekinaError("NO_PASSWORD", 400)
    if(password.length < cfg.minimum) throw new errorHandling.SutekinaError("PASSWORD_TOO_SHORT", 400);
    if(password.length > cfg.maximum) throw new errorHandling.SutekinaError("PASSWORD_TOO_LONG", 400);
    const regexp = new RegExp(`[${cfg.forbidden_characters.join("")}]`);
    if(regexp.test(password)) throw new errorHandling.SutekinaError("PASSWORD_INVALID", 400);
    return true;
}
