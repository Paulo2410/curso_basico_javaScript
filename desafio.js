let aliquota = 0
let deducao = 0
let salarioLiquido = 0
let imposto = 0
let descontDependente = 189.59
let continuar = 'sim'

while (continuar == 'sim' || continuar == 's' || continuar == ''){

    let nome = prompt("Informe o nome do profissional: ")
    let salarioBruto = Number(prompt("Informe o salário do profissional: "))
    let dependentes = Number(prompt("Informe a quantidade de dependentes: "))

    if (salarioBruto > 0 && salarioBruto <= 1903.98) {
        aliquota = 0
        deducao = 0

    } else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
        aliquota = 0.75
        deducao = 142.80

    }else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        aliquota = 0.15
        deducao = 354.80

    }else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        aliquota = 0.225
        deducao = 636.13

    }else {
         aliquota = 0.275
         deducao = 869.36
    }

    imposto = (salarioBruto * aliquota) - deducao - (dependentes * descontDependente)   
    salarioLiquido = salarioBruto - imposto
    
console.log(`Cálculo de pagamento do ${nome}: `)
console.log(`- Salário bruto: R$ ${salarioBruto.toFixed(2)}, Imposto a recolher: R$ ${imposto.toFixed(2)}, Salário líquido: R$ ${salarioLiquido}}`)

continuar = prompt("Deseja realizar uma nova entrada? ")
}    

