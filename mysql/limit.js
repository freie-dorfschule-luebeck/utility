module.exports = (query) => {
    let limit = 10; query.limit = parseInt(query.limit);

    if(isNaN(query.limit) || !query.limit || query.limit < 0);
    else if(query.limit > 100) limit = 100;
    else limit = query.limit;

    return `LIMIT ${limit}`;
}