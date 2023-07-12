const prompt = require('prompt-sync')({sigint: true})

// var pode ter o seu valor modificado
// const não pode ter o seu valor modificado

console.log("CÁLCULO DE IMC")

var nome = prompt("Informe o seu nome: ")
var peso = prompt("Informe o seu peso: ")
var altura = prompt("Informe sua altura")

console.log(typeof(nome), nome)
console.log(typeof(peso), peso)
console.log(typeof(altura), altura)

console.log(`Nome: ${nome} - Peso: ${peso} - Altura: ${altura}`)

var imc = peso / (altura * altura)
console.log(`Seu IMC é: ${imc.toFixed(2)}`)