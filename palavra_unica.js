const sprompt = require('prompt-sync')()

let string = sprompt('Digite a frase com palavras repetidas: ')
let stringfiltrada = Array()
string = string.trim().split(' ')

for(word of string){
    TestString(word.toLowerCase())
}

function TestString(word){
    for(index in stringfiltrada)
        if(word === stringfiltrada[index].toLowerCase())
            return
    stringfiltrada.push(word)
}

console.log(stringfiltrada)