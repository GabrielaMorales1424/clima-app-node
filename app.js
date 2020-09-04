const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);
//clima.getClima(40.68908, -73.95861)
//    .then(console.log)
//    .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coords.lat, coords.lng);
        return `El Clima de ${ direccion } es de ${ temperatura } grados`;

    } catch (e) {

        return `No se pude determinar el clima de ${ direccion } lugar`;

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);