const { options } = require('yargs');
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Base de la tabla de multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en la consola'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Factor Limite de la tabla'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)){
                        throw 'La base debe ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;