const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=c292ed8d3df2b6a88ab573a15dea2090&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}