// + - * / % **

let n1 = 10;
let n2 = 5;

// OPERADORES ARITIMÉTICOS
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);

// OPERADORES DE ATRIBUIÇÃO
let n3 = 25;
// n3 = n3 + 15;
n3 += 2;
console.log(n3);

// INCREMENTO E DECREMENTO

let i = 0;
i--;
console.log(i);

// COMPARAÇÃO

/*
 igualdade de valor ==
 igualdade de valor e tipo ===
 <, >, <=, >=
 != valores diferentes
 !== valores e tipos diferentes
*/

console.log(n1, n2, n3);


console.log(n1 == "10");
console.log(n2 > 10);
console.log(n1 != "10");
console.log(n2 !== "10");

// OPERADORES LÓGICOS

/*
 Pasa uma pessoa viajar para o exterior:
 - precisa ser maior de 18 anos
 OU
 - acompnhado com os pais
 E
 - ter comprado bilhete
*/

let idade = 17;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

// let msgMaiorIdade = ""
// if(idade >= 18){
//     msgMaiorIdade = "É maior de 18 anos"
// } else {
//     msgMaiorIdade = "É menor de 18 anos"
// }
let msgMaiorIdade = (idade >= 18) ? "É maior de 18 anos" : "É menor de 18 anos";

if(!comprouBilhete){
    console.log("Não Comprou o bilhete")
} else {
    console.log(msgMaiorIdade)
};

n1 = 6;
n2 = 8;

let media = (n1 + n2) /2

console.log(`media: ${media}`);

if(n1 === 0 || n2 === 0){
    console.log("Reporovado")
} else if(media < 7){
    console.log("Reprovado. Mas há como recuperar")
} else {
    console.log("Aprovado")
}

console.log("Saiu do bloco if");