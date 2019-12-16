const precoQuartafeira = function(valorFimDeSemana) {
    let desconto = valorFimDeSemana * 0.15
    return console.log("Preco da entrada quarta-feira = ", valorFimDeSemana - desconto)
}

precoQuartafeira(25)