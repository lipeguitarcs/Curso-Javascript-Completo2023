let n = 1;

n = n || 10;

console.log(n)

let isValid = true;

// if(isValid){
//     console.log("É válido")
// }

isValid && console.log("É válido");
isValid || console.log("Não é válido");