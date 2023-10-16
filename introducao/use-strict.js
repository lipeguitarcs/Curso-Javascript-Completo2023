// use strict deixa o js mais seguro
// "use strict"
// x = 10

// y = 10

// function foo() {
//     "use strict"
//     let x = 20
// }
// foo()
// console.log(y)

// function dobrar(n1, n1){
//     console.log(n1, n1)
//     return n1 * n1
// }

// console.log(dobrar(5))

function Teste(){
    "use strict"
    console.log(this)
    this.a = "a"
}
Teste()

let msg = "Uma string"
msg.count = 0
console.log(msg)