const errorHandling = require("../errors");
const cfg = require("./config.json").password;

module.exports = (password) => {
    if(!password) return false;
    if(password.length < cfg.minimum) return false;
    if(password.length > cfg.maximum) return false;
    const regexp = new RegExp(`[${cfg.forbidden_characters.join("")}]`);
    if(regexp.test(password)) return false;
    return true;
}
