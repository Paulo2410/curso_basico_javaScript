
// var nomes = ['Paulo', 'Raquel', 'Victoria', 'Cristina', 'Eloa', 'Paola'] <- outra forma de declarar um vetor
var nomes = []
var n = Number(prompt("Quantos nomes serão lidos? "))

for(var i = 0; i < n; i = i + 1) {
    nomes[i] = prompt("Digite um nome: ")
}

for(var i = 0; i < nomes.length; i = i + 1) {
    console.log(nomes[i])
}


