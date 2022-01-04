
const {argv} = require('./config/yargs')
const {getClima} = require('./clima/clima')
const axios = require('axios')
const colors = require('colors')

// let encodeUrl = encodeURI(argv.direccion) // Es lo que hace es transformar una URL a URL amigable, osea que salta espaciados y todo eso... Osea que si escribo "Hola mundo", esto lo que hara es transformarlo a "Hola%20mundo". Osea que escapara los textos a su forma HTML
// console.log(encodeUrl);

// console.log(argv);

let latitud = argv.latitud;
let longitud = argv.longitud;

getClima(latitud, longitud)
    .then(res => console.log(res))
    .catch(err => console.log(err))

    // Para instalar una version espesifica de "axios" o cualquier otra libreria temos que poner "axios@0.18.1" osea "nombreDeLibrera@version"


// qwe