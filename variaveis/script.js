// DECLARAÇÃO DE VARIÁVEIS (VAR, LET. CONST)

var descricaoVaga
var quantidade = 10
var salario = 6200.75
var abertaParaInscricoes = true

console.log(typeof(descricaoVaga))
descricaoVaga = "Programador javaScript pleno"

console.log(typeof(quantidade))
console.log(typeof(salario))
console.log(typeof(abertaParaInscricoes))

//CONCATENAÇÃO

console.log("Descrição da vaga: " + descricaoVaga + ", Salário " + salario)
console.log("Quantidade: " + quantidade)
console.log("Aberta para inscrições: " + abertaParaInscricoes)

console.log(`Descrição da vaga: ${descricaoVaga}`)
console.log(`Salário: ${salario}`)
console.log(`Quantidade: ${quantidade}`)
console.log(`Aberta para inscrições: ${abertaParaInscricoes}`)

