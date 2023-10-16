function sum(n1, n2) {
    if(typeof n1 !== "number" || typeof n2 !== "number") {
        throw Error("sum aceita apenas números")
    }
    return n1 + n2
}

let soma = "";

try{
    soma = sum(3, "a")
} catch(e){
    console.log("Ocorreu um erro");
    console.log(e.message)
} finally {
    console.log("Bloco finally")
}

console.log(soma);
console.log("Fim do programa");