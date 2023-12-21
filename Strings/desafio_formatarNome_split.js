function formatarNome(nomeCompleto){

    let nomeAsArray = nomeCompleto.split(" ")
    if(nomeAsArray.length === 1){
        return nomeCompleto
    }

    let primeiroNome = nomeAsArray.shift()
    return nomeAsArray.join(" ") + ", " + primeiroNome

}

console.log(formatarNome("Felipe")) // ["Felipe"]
console.log(formatarNome("Felipe Carvalho")) // ["Felipe", "Carvalho"]
console.log(formatarNome("Felipe Carvalho Silva")) // ["Felipe", "Carvalho", "Silva"]