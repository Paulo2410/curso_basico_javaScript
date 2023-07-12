const prompt = require('prompt-sync')({sigint: true})

// var pode ter o seu valor modificado
// const não pode ter o seu valor modificado

console.log("Calculadora IMC")
var nome = prompt("Informe o nome: ")
var peso = prompt("Informe o peso: ")
var altura = prompt("Informe a altura: ")

console.log(typeof(nome), nome)
console.log(typeof(peso), peso)
console.log(typeof(altura), altura)

console.log(`Nome: ${nome}, Peso: ${peso}, Altura: ${altura}`)

var imc = peso / (altura * altura)

console.log(`IMC: ${imc}`)