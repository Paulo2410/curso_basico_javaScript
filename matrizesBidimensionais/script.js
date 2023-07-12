
/*
var pessoas = []


    OUTRAS FORMAS DE DECLARAR UMA MATRIZ 

pessoas[0] = ["Paulo", "Masculino", 33]
pessoas[1] = ["RAquel", "Feminino", 38]

var pessoas = [["Paulo", "Masculino", 33], ["Raquel", "Feminino", 38]]



pessoas[0] = []
pessoas[0][0] = "Paulo"
pessoas[0][1] = "Masculino"
pessoas[0][2] = 33

pessoas[1] = []
pessoas[1][0] = "Raquel"
pessoas[1][1] = "Feminino"
pessoas[1][2] = 38

console.log('Length de linhas: ', pessoas.length)
console.log('Length de colunas (linha 0): ', pessoas[0].length)
console.log('Length de colunas (linha 1):', pessoas[1].length)

// EXIBINDO DADOS
console.log("---------------------------")
for(var i = 0; i < pessoas.length; i = i +1) {
    for(var j = 0; j < pessoas[i].length; j = j + 1) {
        console.log(`Coordenadas linha ${i} coluna ${j}: ${pessoas[i][j]}`)
    }
    console.log("--------------------------")

    
}
*/

console.log("------OUTRO PROGRAMA-------")

var pessoas = []

for(var i = 0; i < 3; i = i + 1) {
    pessoas[i] = []
    for(var j = 0; j < 3; j = j + 1) {

        if(j == 0) {
            pessoas[i][j] = prompt("Informe o nome: ")
        }
        else if(j == 1) {
            pessoas[i][j] = prompt("Informe o sexo: ")
        }
        else if(j == 2) {
            pessoas[i][j] = Number(prompt("Informe a idade: "))
        }
    }
}

// EXIBIÇÃO ALTERNATIVA

for(var i = 0; i < pessoas.length; i = i + 1) {
    console.log(`Olá ${pessoas[i][0]}, vi que você tem ${pessoas[i][2]} anos`)
}


