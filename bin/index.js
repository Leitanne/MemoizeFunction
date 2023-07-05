const memoizeImport = require("../dist/memoize.js");

function factorial(number){
    var total = 1;

    for(let i=1; i <= number; i++){
        total = total * i;
    }

    return total;
}

console.log(`Se ejecuta dos veces el metodo con los mismos parametros, el que ponga "valor ya almacenado" antes de imprimir el tiempo, 
será el que resultado que se recupere de memoria y no se vuelva a calcular\n`);
let factorialMem = memoizeImport.memoize(factorial);

let start = performance.now();
factorialMem(200000);
let timeTaken = performance.now() - start;
console.log("Total time: "+timeTaken+" miliseconds");

start = performance.now();
factorialMem(200000);
timeTaken = performance.now() - start;
console.log("Total time: "+timeTaken+" miliseconds");

start = performance.now();
factorialMem(500000);
timeTaken = performance.now() - start;
console.log("Total time: "+timeTaken+" miliseconds");

start = performance.now();
factorialMem(500000);
timeTaken = performance.now() - start;
console.log("Total time: "+timeTaken+" miliseconds");
