import { memoize } from "../src/memoize";

test('Necesito que el tiempo de ejecución se reduzca', ()=> {
    function factorial(number: number) : number{
        var total: number = 1;
    
        for(let i=1; i <= number; i++){
            total = total * i;
        }
    
        return total;
    }

    let factorialMem = memoize(factorial);

    let startFirst:number = performance.now();
    factorialMem(200000000);
    let timeTakenFirst:number = performance.now() - startFirst;

    let startSecond:number = performance.now();
    factorialMem(200000000);
    let timeTakenSecond:number = performance.now() - startSecond;

    expect(timeTakenFirst).toBeGreaterThan(timeTakenSecond);
});