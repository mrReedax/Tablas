const fs = require('fs'); //importar
const colors = require('colors');

const crear_archivo = async(base = 0, listar, limite) => {
    try{
        console.clear();

        
        let salida = '';
        let consola = '';

        for (let i = 1; i <= limite; i++){
            consola += `             ${base}`.red + ` x `.rainbow.bold.trap + `${i}`.cyan + ` = `.rainbow + `${base*i}\n`.magenta;
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if (listar){
            console.log('===================================='.bold)
            console.log(`            Tabla del ${base}`.bold.trap          )
            console.log('===================================='.bold)
            console.log(consola);
        }
        
        const nombreArchivo = `./Tablas/Tabla_${base}.txt`;
        fs.writeFileSync(nombreArchivo, salida);

        return (nombreArchivo.trap.rainbow);
    } catch(err) {
        throw err;
    }
    
}

module.exports = {
    crear_archivo
}