// var, let, const

// var -> ES5 - cross-browser
// let e const -> ES2015

let teste = "minha string";
teste = 10

// diferença entre let e var= caso você use var, ele pode ser subtituído por outra var de mesmo nome, muitas vezes sem querer. O let não permite isso

let teste2 = 10;

let teste3;

console.log(teste2);

teste3 = 20

console.log(teste3);

const teste4 = "eu sou imutavel";
console.log(teste4);