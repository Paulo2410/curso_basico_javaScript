var pessoas = [
    ["João", "Masculino", 47],
    ["Maria", "Feminino", 35]
]

console.log("Length de linhas: ", pessoas.length)
console.log("Length de colunas (linha 0 ", pessoas[0].length)
console.log("Length de colunas (linha 1 ", pessoas[1].length)


console.log("---------------")
for (var i = 0; i < pessoas.length; i = i + 1) {
    for (var j = 0; j < pessoas[i].length; j = j + 1) {
        console.log(`Coordenadas linha ${i} coluna ${j}: ${pessoas[i][j]}`)
    }
}