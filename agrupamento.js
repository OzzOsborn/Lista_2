let vendas = [
    {cliente: 'João', total: 100},
    {cliente: 'João', total: 100},
    {cliente: 'Maria', total: 150},
    {cliente: 'Maria', total: 150},
    {cliente: 'Pedro', total: 150}
]

let resultado = vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
}, {});

console.log(resultado);