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

let idade = 18;
let paisPresentes = true;
let comprouBilhete = false
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

console.log(n1, n2, n3);
n1 = 6;
n2 = 8;

let media = (n1 + n2) /2

console.log(`media: ${media}`);
console.log((3 * 2) ** 2);