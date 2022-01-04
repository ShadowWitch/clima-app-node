const argv = require('yargs').options({
    latitud: {
        alias: 'l',
        desc: 'Latitud del lugar',
        demand: true
    },
    longitud: {
        alias: 'g',
        desc: 'Longitud del lugar',
        demand: true
    }
}).argv;

module.exports = {
    argv
}

// qwe