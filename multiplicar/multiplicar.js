// required's
const fs = require('fs'); // libreria para generar archivos de texto
const colors = require('colors'); // cambia de color las lineas de la consola

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('El valor de la base o del limite no es un valor númerico');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt `)
        });
    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject('El valor de la base o del limite no es un valor númerico');
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }
        resolve(data);
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}