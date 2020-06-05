module.exports = (obj) => {
    const values = Object.values(obj);
    const keys = Object.keys(obj);
    for(let i = 0; i < values.length; i++){
        if(values[i].length === 0) obj[keys[i]] = null;
    };
    return obj;
}