class Objeto{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

function ArrayObjeto(array){
    let arrayObjeto = []
    for(pessoa of array)
        arrayObjeto.push(new Objeto(pessoa[0], pessoa[1]))
    return arrayObjeto
}

function ObjetoArray(objeto){
    let objetoArray = []
    for(pessoa of objeto){
        let arrayPessoa = []
        arrayPessoa[0] = pessoa.nome
        arrayPessoa[1] = pessoa.idade
        objetoArray.push(arrayPessoa)
    }
    return objetoArray
}
let array = [['Bruno', 10], ['Lucas', 14], ['Fernada', 11], ['Maria', 15]]

arrayObjeto = ArrayObjeto(array)
console.log('Array: ', array, '\nObjeto do array: ', arrayObjeto)
objetoArray = ObjetoArray(arrayObjeto)
console.log('Array novamente: ', objetoArray)

