const fs = require('fs');
const colors = require('colors');

/*EJERCICIO*/
//Incluir el limite en la función crearArchivo
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es número`);
            return;
        }

        for (let index = 1; index <= limite; index++) {
            data += (`${base} * ${index} = ${base * index}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

let listarTabla = (base, limite) => {
    console.log('======================='.green);
    console.log(`======Tabla del ${base}======`.green);
    console.log('======================='.green);

    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}\n`);
    }
}

/*EJERCICIO*/
//======================================================================================================================
//Crear la función listarTabla y mostrar en consola el resultado.

/*RESPUESTA*/
//----------------------------------------------------------------------------------------------------------------------
// let listarTabla = (base, limite) => {
//     return new Promise((resolve, reject) => {
//         let tabla = new Array(limite);
//         if (!Number(base)) {
//             reject(`El valor introducido '${base}' no es número`);
//             return;
//         }

//         for (let index = 1; index <= limite; index++) {
//             console.log(`${base} * ${index} = ${base * index}\n`);
//         }

//     });
// }

//----------------------------------------------------------------------------------------------------------------------
//======================================================================================================================
/*FIN DE EJERCICIO*/

//                                                          //Sirve para agregar elementos globales.
module.exports = {
    crearArchivo,
    listarTabla
}