function latir() {
    console.log(this.name, "fala: au au")
}

function miar() {
    console.log(this.name, "fala: miau")
}

const dog = {
    name: "Rex",
    falar() {
        console.log(this.name, "fala: au au")
    },

    falar2() {
        console.log("falar2")
    }
}

// const cat = {
//     name: "Mingal",
//     falar: miar
// }

const cat = {
    name: "Mingal",
    falar() {
        miar.call(this)
    }
}

dog.falar()
dog.falar2()
cat.falar()