// Replace
let str1 = "minha STRING bacanuda"
console.log(str1.replace(/i/g, "o"))
console.log(str1)

// indexOf
console.log(str1.indexOf("não encontrado"))
console.log(str1.includes("minha"))
console.log(str1.indexOf("minha"))
console.log(str1.indexOf("minha") >= 0)

// slice
console.log(str1.slice(2, 7)) /* Permite passar valores negativos */
console.log(str1.substring(2, 7))

console.log(str1.slice(-5, -1))
console.log(str1.substring(-5, -2))

console.log(str1.slice(5, 1))
console.log(str1.substring(5, 2))

console.log(str1.slice(8, 1))
console.log(str1.substring(8, 1))

// to**Case
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1)

// valueOf
let strAsObj = new String("Minha string como objeto")
console.log(strAsObj)
console.log(strAsObj.valueOf())
console.log(strAsObj.toString())
console.log("--------------------")

// trim
str1 = `

   teste           


`
console.log(str1)
console.log("--------------------")
console.log(str1.trim())
console.log("--------------------")
console.log(str1.trimEnd())
console.log("--------------------")
console.log(str1.trimStart())
console.log("--------------------")
console.log(str1)

// pad
str1 = "0123456789"
console.log(str1.padStart(20))
console.log(str1.padStart(20, "*"))
console.log(str1.padStart(20, "*").length)
console.log(str1.padEnd(20))
console.log(str1.padEnd(20, "*"))
console.log(str1.padEnd(20, "*").length)
console.log(str1)

let telefone1 = "91234-2345"  //"9****-**45"
let telefone2 = "1234-2345"  //"1***-**45"
function mascararTelefone(numero){
    let hifemPosicao = numero.indexOf("-")
    let numeroInicio = numero.slice(0, hifemPosicao)
    let numeroFinal = numero.slice(hifemPosicao + 1)
    let doisUltimosNumeros = numeroFinal.slice(-2)
    return `${numeroInicio[0].padEnd(numeroInicio.length, "*")}-${doisUltimosNumeros.padStart(numeroFinal.length, "*")}`
}
console.log(mascararTelefone(telefone1))
console.log(mascararTelefone(telefone2))

// starts
let str2 = "Hoje é Sexta"
console.log(str2.startsWith("oje", 1))
console.log(str2.endsWith("é", 6))

// char
let str3 = "abcdefgh"
console.log(str3.charAt(1))
console.log(str3[1])
console.log(str3.charCodeAt(0))
console.log(str3.charCodeAt(1))

/*
replace(),      replaceAll()**
indexOf(),      lastIndexOf(),      includes()*,
slice(),        substring(),        split(),
toLowerCase(),  toUpperCase(),
valueOf(),
trim(),        trimEnd()*,         trimStart()*,
padStart()*,    padEnd()*,
startsWith()*,  endsWith()*,
charAt(),       charCodeAt()        e length 

Legenda:
*não funciona em browsers mais antigos
**não funciona em quase nenhum browser

*/