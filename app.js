//                                                          //Los required sirven para crear file system.
//const fs = require('fs');
//                                                          //Paquetes no nativos de node.
// const fs = require('express');
//                                                          //Archivos creados en el proyecto.
// const fs = require('./fs');

/*EJERCICIO*/
//======================================================================================================================
//Mostrar en consola la tabla de multiplicar de la base usando ciclo for

/*RESPUESTA*/
//----------------------------------------------------------------------------------------------------------------------
//let base = 7;

// for (let index = 1; index <= 10; index++) {
//     data += (`${base} * ${index} = ${base * index}\n`);

// }

//----------------------------------------------------------------------------------------------------------------------

//======================================================================================================================
/*FIN DE EJERCICIO*/

//let base = 7;
//let data = '';

//                                                          //[fs.writeFile](nombre del archivo, contenido, callback)
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
//                                                          //
// });


/*OPTIMIZACION DE YARGS*/
// const argv = require('yargs')
//     //                                                      //[command](<nombre del comando>,<descripción>,
//     //                                                      //      <configuración de banderas del comando>,)
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             //                                              //Indica que es un parámetro obligatorio.
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv;
//                                                          //El código anterior se simplifica la siguiente línea.
const argv = require('./config/yargs').argv;

//                                                          //Para usar colores en la consola.
const colors = require('colors');

//                                                          //Se destructura "multiplicacion" para usar solo la función.
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo =>
                /*Ejercicio Carpeta 4 Video 11*/
                console.log('Archivo creado:', colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}



//console.log(argv);

// console.log(process.argv);
//                                                          //Accede a registro argv de procd ..cess.
//let argv2 = process.argv;
//                                                          //Obtenemos lo que ingresó en la consola.
// let parametro = argv[2];
//                                                          //Descompone a partir del signo '=' y obtiene el valor.
// let base = parametro.split('=')[1];