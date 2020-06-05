const errorHandling = require("../errors");
const emailRegex =  /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

module.exports = (email) => {
    if (!email) throw new errorHandling.SutekinaError("No email entered", 400);
    if(email.length>254) throw new errorHandling.SutekinaError("The email is too long", 400);
    const valid = emailRegex.test(email);
    if(!valid) throw new errorHandling.SutekinaError("The email is invalid", 400);
    const parts = email.split("@");
    if(parts[0].length>64) throw new errorHandling.SutekinaError("The email's userinfo is too long", 400);
    var domainParts = parts[1].split(".");
    if(domainParts.some(part => {
        return part.length > 63
    })) throw new errorHandling.SutekinaError("The email's host is too long", 400);
    return true;
}