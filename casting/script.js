/*
 ENTRADA DE DADOS SEMPRE IRÁ RETORNA UMA STRING

 var valor1 = prompt("Informe um valor")
 var valor2 = prompt("Informe outro valor")

*/

// PARA FAZER UMA SOMA ARITMÉTICA PRECISAMOS TIPAR A VARIÁVEL PARA NÃO SER FEITO UMA CONCATENAÇÃO

var valor1 = Number(prompt("Informe um valor: "))     
var valor2 = Number(prompt("Informe outro valor: "))


console.log(typeof(valor1), valor1)
console.log(typeof(valor2), valor2)

var soma = valor1 + valor2 
console.log(soma)