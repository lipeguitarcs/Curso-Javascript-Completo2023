let n1 = "10.51894";
// n1 = parseFloat(n1);
n1 = Number(n1);

let n2 = 2;

console.log(n1 * n2, typeof n1, typeof n2, n1);

// parseFloat, parseInt, Number() 

n2 = 12;
n2 = n2.toString(16); // o padrão é 10, decimal; 16 transforma em número hexadecimal; 2 em binário

console.log(n2, typeof n2);
