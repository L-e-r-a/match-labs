
const getDataFromApi = (url, updateValue, filterJson) => {
    fetch(url)
    .then(response => response.json())
    .then(json => {
        const data = filterJson(json) || json;
        updateValue(data);
    });

    return false;
}

export default getDataFromApi;