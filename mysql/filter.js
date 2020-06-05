module.exports = (query, filters) => {
    let filter = "=";

    if(query.filter) query.filter = query.filter.toString();

    if(!query.filter || !query.filter[0] || !filters.includes(query.filter));
    else if(searchFilters[query.filter]) filter = searchFilters[query.filter];

    return filter;
}

let searchFilters = {
    equals: "=",
    regexp: "REGEXP"
};