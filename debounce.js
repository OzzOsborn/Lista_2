function Debounce(fn, delay) {
    let timerId;

    return function(...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

function Função(texto) {
    console.log("Executando com argumento:", texto);
}

const FunçãoDebounce = Debounce(Função, 1000); 

console.log("Chamando a função várias vezes...");

FunçãoDebounce("Primeira chamada");
setTimeout(() => FunçãoDebounce("Segunda chamada"), 200);
setTimeout(() => FunçãoDebounce("Terceira chamada"), 400);
setTimeout(() => FunçãoDebounce("Quarta chamada"), 1200);
