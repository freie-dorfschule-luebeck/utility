const errorHandling = require("../errors");
const cfg = require("./config.json").password;

module.exports = (password) => {
    if(!password) throw new errorHandling.SutekinaError("No password was entered", 400)
    if(password.length < cfg.minimum) throw new errorHandling.SutekinaError("The entered password is too short!", 400);
    if(password.length > cfg.maximum) throw new errorHandling.SutekinaError("The entered password is too long!", 400);
    const regexp = new RegExp(`[${cfg.forbidden_characters.join("")}]`);
    if(regexp.test(password)) throw new errorHandling.SutekinaError("The entered password includes a forbidden character!", 400);
    return true;
}