var condicao = prompt("Informe um valor: ")

while(condicao != 'não') {
    console.log(condicao)
    condicao = prompt("Deseja continuar? ")
}

console.log(`Você digitou '${condicao}' e optou parar o programa.`)