
const parseData = (dataList) => {
    let jsonData = JSON.parse(dataList);
    let data = [];

    for (let i = 0; i < jsonData.length; i++) {
        data.push(jsonData[i]);
    }
    return data;
};

export default parseData;
