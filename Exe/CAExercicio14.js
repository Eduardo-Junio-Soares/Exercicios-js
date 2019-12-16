const tempoDeVida = function(anoNascimento) {
    let idade = 2019 - anoNascimento
    let meses = idade * 12
    let dias = idade * 365
    let horas = dias * 24

    return console.log(`    Idade = ${idade}
    meses = ${meses}
    dias = ${dias}
    horas = ${horas}`)
}

tempoDeVida(1998)