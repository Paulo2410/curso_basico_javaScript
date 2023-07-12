
var idade = prompt("Informe a idade: ")

if(idade >= 0 && idade <= 14) {
    console.log("Criança")
}
else if(idade >= 15 && idade <= 18) {
    console.log("Adolescente")
}
else if(idade > 18 && idade <= 60) {
    console.log("Aduldo")
}
else if(idade > 60) {
    console.log("Idoso")
}
else {
    console.log("Idade não encontrada")
}