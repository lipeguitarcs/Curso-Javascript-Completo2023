// var name = "Felipe"
// let name2 = "Fê"

function teste(str, n) {
    console.log(this.name)
    // console.log(this.name2)
    console.log(str, n)
}

teste.call({name: "Mary"}, "string", 20)

teste.apply({name: "John"}, [" da Silva", 28])

teste.call({name: "John"}, ...[" da Silva", 28])

//

const teste2 = teste.bind({name: "Joana"})

teste2("Joaquina", 30)
teste("Manuela", 40)

document.addEventListener("click", teste2)