const fetch = require('node-fetch');
const getWeather = (req, res) => {
    res.send(req.params.city);
};
 
module.exports = {
    getWeather
}