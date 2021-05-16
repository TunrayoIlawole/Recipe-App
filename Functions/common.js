exports.readStorage = ({ key, isObject }) => {
    const item = localStorage.getItem(key);

    if (item) {
        return isObject ? JSON.parse(item) : item
    }

    return isObject ? [] : 0
}

exports.persistData = ({ key, isObject, data }) => {
    localStorage.setItem(key, isObject ? JSON.stringify(data) : data);
}