const prompt = require('prompt-sync')({sigint: true})

var soma = 0
var media = 0
var valor = 0

var qtdeNotas = Number(prompt("Informe a quantidade de notas a serem lidas: "))

for (var i = 1; i <= qtdeNotas; i = i + 1) {
    nota = Number(prompt(`Informe a nota ${i} do aluno: `))
    soma = soma + nota
    media = soma / qtdeNotas
}

console.log(`A média do aluno é: ${media}`)



