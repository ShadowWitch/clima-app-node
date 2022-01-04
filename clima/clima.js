const axios = require('axios')
const colors = require('colors')
require('dotenv').config();

const getClima = async (lat, lng) => {
    const api_key = process.env.API_KEY;

    try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=51.5085&lon=-0.1257&units=metric&appid=${api_key}`)
        const informacion = resp.data.main;
        const {temp, temp_min, temp_max, humidity} = informacion

        return `Temperatura Actual: ${JSON.stringify(temp).green}\nTemperatura Minima: ${JSON.stringify(temp_min).yellow}\nTemperatura Maxima: ${JSON.stringify(temp_max).red}\nHumedad: ${JSON.stringify(humidity).rainbow}`

    } catch (error) {
        if(error.code === 'ENOTFOUND') throw new Error('Hubo un error en la peticion');
    }
}


module.exports = {
    getClima
}

// qwe