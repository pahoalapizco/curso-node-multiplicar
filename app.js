const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs.js');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(data => {
                console.log(`==Tabla del ${argv.base}==`.green);
                console.log(data)
            })
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.bgRed(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido'.red);
        break;
}
// console.log(argv);

// let parametro = argv;
// let base = parametro.split('=')[1];