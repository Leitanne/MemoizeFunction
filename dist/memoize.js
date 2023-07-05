"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
function memoize(callback) {
    let diccionario = {};
    return function (...args) {
        const clave = args.join("_"); //cada argumento se une al string con _;
        // Comprueba el diccionario
        if (diccionario.hasOwnProperty(clave)) {
            console.log("Valor ya almacenado");
        }
        else {
            diccionario[clave] = callback(...args);
        }
        return diccionario[clave];
    };
}
exports.memoize = memoize;
