const arr = new Array();
console.log(arr);

const arr2 = new Array(true, "Felipe", 30, new Array(2, 4, 10));
console.log(arr2);

arr[0] = "Felipe";
arr[1] = 30;
console.log(arr);
console.log(arr2[3][2]);
console.log(arr2[3].length);
console.log(arr2[3][arr2[3].length - 1]);

const arr3 = ["Felipe", 30, [3, 6, 9], true];
arr3[4] = "novo valor";
arr3[arr3.length] = "novo valor 2";
arr3.push("Adicionado com push()");

console.log(arr3);
console.log(arr3[2]);
console.log(arr3[2][0]);
let n = 6
console.log(arr3[n]);
