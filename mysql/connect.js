const errorHandling = require("../errors");

let defaultConnection;

module.exports = (connection) => {
    if(connection) defaultConnection = connection;
    if(!defaultConnection) throw new errorHandling.SutekinaError("No database connection", 500);
    return defaultConnection;
}