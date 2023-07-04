"use strict";
// https://delacruz.dev/blog/memoize-en-javascript
function memoize(callback) {
    let diccionario = {};
    return function (...args) {
        const clave = args.join("_"); //cada argumento se une al string con _;
        // Comprueba el diccionario
        if (diccionario.hasOwnProperty(clave)) {
            console.log("Valor ya almacenado almacenado");
        }
        else {
            diccionario[clave] = callback(...args);
        }
        return diccionario[clave];
    };
}
