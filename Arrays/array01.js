const arr = [1, 5, 10, "ola", true]

// let soNumeros = arr.every( function(el) {
//     return typeof el === "number"
// })

// console.log(soNumeros)

// let soNumeros2 = arr.some( function(el) {
//     return typeof el === "number"
// })

// console.log(soNumeros2)

let arr1 = arr.filter(function(el, i, _arr){
    return typeof el === "number"
})

// console.log(arr)
// console.log(arr1)

// const arr2 = arr.forEach(function(el, i, _arr){
//     return false
// })
// -----------------------
// const arr2 = []
// arr.forEach(function (el, i, _arr) {
//     console.log(el)
// })

// console.log(arr)
// console.log(arr2)

let arr2 = arr1.map(function (el, i, _arr) {
    return el * el
})

console.log(arr)
console.log(arr1)
console.log(arr2)