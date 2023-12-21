function formatarNome(nomeCompleto){
    nomeCompleto = nomeCompleto.trim()
    let primeiroEspaco = nomeCompleto.indexOf(" ")
    if(primeiroEspaco < 0) {
        return nomeCompleto
    }

    let primeiroNome = nomeCompleto.slice(0, primeiroEspaco)
    let sobrenome = nomeCompleto.slice(primeiroEspaco + 1)
    return sobrenome + ", " + primeiroNome
}

console.log(formatarNome("Felipe")) //Felipe
console.log(formatarNome("Felipe Carvalho")) // Carvalho, Felipe
console.log(formatarNome("Felipe Carvalho Silva")) // Carvalho Silva, Felipe

console.log("abc def gh".split(" "))