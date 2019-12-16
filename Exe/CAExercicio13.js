const viagem = function(KMInicial, KMFinal) {
    let KMPercorridos = KMFinal - KMInicial
    let valorCombustivel = ((KMPercorridos * 3.40) / 15)
    return console.log(`Quilometros percorridos -------- ${KMPercorridos}
    valor gasto com combustivel -------- ${valorCombustivel}`)
}

viagem(30000,30265)