const converterMoeda = function(dinheiro) {
    let dolar = dinheiro / 3.08
    let euro = dinheiro / 3.24
    let libra = dinheiro / 3.84

    return console.log(`    Dolar = ${dolar}
    Euro = ${euro}
    libra = ${libra}`)
}

converterMoeda(450)