let arr = [1,2,3]

let j = 0;
console.log(arr)

let soma = arr.reduce(function(acumulador, atual, i, _arr){
    console.log("i: ", i)
    console.log("j: ", j++)
    console.log("acumulador: ", acumulador, " --- atual: ", atual)
    return acumulador + atual
})

console.log(soma)
console.log(arr)
// arr.reverse()

const nomes = ["Felipe", "Maria", "Joana, João"]
let nomesPorOrdem = nomes.reduce(function (nomes, nomeAtual) {

    /* 1-
        nomes = {}
        nomeAtual = "Felipe" -> primeiraLetra = nomeAtual [0] = "F"
        return {F: 1}

        2-
        nomes = {F: 1}
        nomeAtual = "Maria" -> primeiraLetra = "M"
        return {F: 1, M: 1}
        
        3-
        nomes = {F: 1, M: 1}
        nomeAtual = "Joana" -> primeiraLetra = "J"
        return {F: 1, M: 1, J: 1}
        
        2-
        nomes = {F: 1, M: 1, J: 1}
        nomeAtual = "João" -> primeiraLetra = "J"
        return {F: 1, M: 1, J: 2}
    */

    let primeiraLetra = nomeAtual[0]
    if(nomes[primeiraLetra]) {
        nomes[primeiraLetra]++
    } else {
        nomes[primeiraLetra] = 1
    }
    return nomes
}, {})

console.log(nomesPorOrdem)

const numeros = [1,3,4,1,4,5,3,5,8,9]

// const numerosUnicos = [1,3,4,5,8,9]