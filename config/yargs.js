const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

// Libreria d npm para facilitar la captura de parametros desde la consola.
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea archivo de texto con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}