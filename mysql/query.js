module.exports = (query, placeholders, router) => {
    
    const connection = require("./connect")();

    connection.query(query, placeholders, (error, result, fields) => {
        console.log(result)
        
        //router.handler(error, result, fields, router);
    });
}