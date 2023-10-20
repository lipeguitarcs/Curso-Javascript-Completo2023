function sum(){
    const numbers = Array.from(arguments)
    console.log(numbers)
    console.log(numbers.reduce)
}
function average(){
    return 0
}
sum(1,2,3,4,5)