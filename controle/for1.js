let contador = 1
while (contador <= 10) {
    console.log(`Contador = ${contador}`)
    contador++
}

for(let i = 1; i <=10; i++) {
    console.log(`i = ${i}`)
}

const notas = [5.9, 7.4, 9.8, 11, 7.7, 3.2, 6, 10, 0]
for(let i = 0; i < notas.length; i++) {
    if(notas[i] >= 6 && notas[i] <=10) {
        console.log("Nota =", notas[i], "Aprovado")
    } else if (notas[i] > 10) {
        console.log("Nota =", notas[i], "Nota inválida")
    } else {
        console.log("Nota =",notas[i], "Reprovado")
    }
}




    


