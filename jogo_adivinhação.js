const sprompt = require('prompt-sync')()

let numberRandom = Math.round(Math.random() * 100)
let guess

console.log('Tente adivinhar um número entre 0 a 100!')
do{
    guess = parseInt(sprompt('Número de tentativa: '))
    if(guess > 100 || guess < 1)
        console.log('Lembre que o número secreto entre 1 e 100')    
    else
        GuessNumber(guess)
}while(guess !== numberRandom)

console.log(`Boaaa! o número secreto era o ${numberRandom}!`)

function GuessNumber(guess){
    if(numberRandom > guess)
        console.log('Mais alto')
    else if(numberRandom < guess)
        console.log('Mais baixo')
}