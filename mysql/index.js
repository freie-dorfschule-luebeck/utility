module.exports = {
    ...require("mysql2"), 
    ...{
        $connect: require("./connect"),
        $filter: require("./filter"),
        $limit: require("./limit"),
        $query: require("./query")
    }
}