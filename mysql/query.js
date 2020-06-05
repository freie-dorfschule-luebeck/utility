module.exports = (query, placeholders, router) => {
    const connection = require("./connect")();
    connection.query(query, placeholders, (error, result, fields) => {
        router.handler(error, result, fields, router);
    });
}