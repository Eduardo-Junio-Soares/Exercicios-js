function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Celular', 1234.49))
console.log(criarProduto("mesa", 2432.99))