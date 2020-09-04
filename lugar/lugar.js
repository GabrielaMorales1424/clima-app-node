const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/?json=1&locate=${encodeUrl}`,
        headers: { 'auth': '270304373376186438590x127524' }
    });

    const resp = await instance.get();
    if (resp.data === "") {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data;
    const direccion = data.standard.countryname;
    const lat = data.latt;
    const lng = data.longt;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}