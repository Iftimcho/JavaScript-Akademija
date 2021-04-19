const fs = require('fs');

const configFile = `${__dirname}/../../config.json`;
let configData = null;

const get = (section) => {
    if(configData === null) {
        let data = fs.readFileSync(configFile);
        configData = JSON.parse(data);
    }

    if(configData[section]) {
        return configData[section];
    }

    return null;
};

module.exports = {
    get
};