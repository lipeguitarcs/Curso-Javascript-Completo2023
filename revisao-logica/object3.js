const produto = {
    nome: "caneta",
    qtd: 10,
    // comprar(n)
    comprar: function(n){
        console.log(n)
        if (n > this.qtd){
            return "Quantidade não disponível"
        }

        this.qtd -= n
    },
    teste1: function(){
        console.log(this)
    },
    teste2: () => {
        console.log(this)        
    }
}

produto.comprar(3)
console.log(produto)

produto.comprar(5)
console.log(produto)

produto.comprar(8)
console.log(produto)