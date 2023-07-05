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

function factorial(number){
    var total = 1;

    for(let i=1; i <= number; i++){
        total = total * i;
    }

    return total;
}

let memFactorial = memoize(factorial);
const respuesta = document.getElementById("respuesta");

document.getElementById('calcular')?.addEventListener('click', () => {
    let start = performance.now();
    memFactorial(200000);
    let timeTaken = performance.now() - start;
    respuesta.innerHTML += "Total time: "+timeTaken+" miliseconds<br>"; 
}, false);
