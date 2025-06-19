let number = 10

function fatorial(number){
    if(number < 0)
        console.log(EvalError('Número menor que 0, impossivel fazer fatorial!'))
    else{
        if(number === 0 || number === 1)
            return 1
        else
            return number * fatorial(number - 1)
    }
}

console.log(fatorial(5))