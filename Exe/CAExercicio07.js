const salarioFuncionario = function(horasTrabalhadas, valorHora, desconto) {
    let salarioBruto = horasTrabalhadas * valorHora
    let totalDescontos = (desconto / 100) * salarioBruto
    let salarioLiquido = salarioBruto - totalDescontos

return console.log(`horas trabalhadas -----------${horasTrabalhadas}`), console.log(`salário bruto ----------${salarioBruto}`),console.log(`total de descontos -------------${totalDescontos}`), console.log(`salario liquido -------------${salarioLiquido}`)

    
}

salarioFuncionario(300,7,9)