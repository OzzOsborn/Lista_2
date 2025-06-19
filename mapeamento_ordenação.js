let produtos = [
    {nome: 'Calça' , preço: 120},
    {nome: 'Camiseta', preço: 10},
    {nome: 'Cueca', preço: 10},
    {nome: 'Sapato', preço: 100}
]

function NomeOrdenados(produtos){
    let nomeOrdenado = produtos

    nomeOrdenado.sort((a, b) => a.preço - b.preço)
    nomeOrdenado = nomeOrdenado.map((produtos) => produtos.nome)

    return nomeOrdenado
}

console.log(NomeOrdenados(produtos))