function Cachorro(name){
    let posicao = 0
    this.name = name
    
    this.latir = function () {
        console.log(this.name, "está latindo")
    }

    this.andar = function(distancia) {
        posicao += distancia
        console.log(this.name, "andou ", distancia, "m")
        console.log("A posicao atual é", posicao, "m")
    }
}

const rex = new Cachorro("rex")
const polly = new Cachorro("polly")

console.log(rex)
rex.latir()
rex.andar(5)
rex.andar(10)
polly.andar(31)

const hachi = new Cachorro("hachi")
hachi.latir()
hachi.andar(21)
hachi.andar(-14)