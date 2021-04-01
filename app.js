
const { crear_archivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs.js');

console.clear;

console.log(argv);
// const [,,arg3] = process.argv;
// const [,base = 0] = arg3.split('=');
// console.log(base);

// const base = 9;

crear_archivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
.catch(err => console.log(err));