const nomes = ["", "", ""]
const pessoa = {nome: "", idade: 10, email: ""}
const pessoa1 = {}

const pessoas = [ {
    nome: "Felipe",
    idade: 30
}, {
    nome: "Carlo",
    idade: 48
}, {
    nome: "Celia",
    idade: 67
}, {
    nome: "Yor",
    idade: 22
}]

for(let i = 0; i < pessoas.length; i++) {
    console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}