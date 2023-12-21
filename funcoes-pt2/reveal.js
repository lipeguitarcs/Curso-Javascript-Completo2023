const calcRevealPattern = (function(){
    let n = 0

    function _checkNumber(n){
        if(typeof n !== "number"){
            throw TypeError("Insira um número")
        }
    }

    function somar(_n){
        _checkNumber(_n)
        n += _n
        return this
    }

    function subtrair(_n){
        _checkNumber(_n)
        n -= _n
        return this
    }

    function log() {
        console.log(n)
        return this
    }

    return {
        somar,
        subtrair,
        log
    }
})()

calcRevealPattern.somar(5).somar(21).subtrair("5")
calcRevealPattern.log()