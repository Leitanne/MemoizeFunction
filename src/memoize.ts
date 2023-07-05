// https://delacruz.dev/blog/memoize-en-javascript

export function memoize(callback: (...args: any[]) => any) {
    let diccionario: Record<string, any> = {};

    return function(...args: any[]){
        const clave = args.join("_"); //cada argumento se une al string con _;

        // Comprueba el diccionario
        if(diccionario.hasOwnProperty(clave)) {
            console.log("Valor ya almacenado");
        }else{
            diccionario[clave] = callback(...args);
        }

        return diccionario[clave];
    }
}