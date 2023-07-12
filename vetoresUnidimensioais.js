const prompt = require('prompt-sync')({sigint: true})
var nomes = []

var n = Number(prompt("Informe quantos nomes serão lidos: "))

for (var i = 0; i < n; i = i + 1) {
    nomes[i] = prompt("Digite um nome: ")
}


for (var i = 0; i < n; i = i + 1) {
    console.log(nomes[i])
}
