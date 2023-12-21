const calc = {
    value: 0,
    soma(n){
        this.value += n
        return this
    },
    subtrai(n){
        this.value -= n
        return this
    },
    log() {
        console.log(this.value)
        return this
    }
}

calc.soma(5).soma(2).subtrai(4).log().soma(7).soma(2)
console.log(calc.value)