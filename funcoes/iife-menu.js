// function init() {
//     let isValid = false
//     console.log("init menu", isValid)
// }
// init()

(function(win, doc){
    let isValid = false
    win.alert("Olá mundo")
    console.log("menu", isValid)

    function init() {
        console.log("init do menu")
    }
    init()
})(window, document)

// Aqui ele invoca o "win" e o "doc" pelos parâmetros "window" e "document" colocados na função iife (função auto-invocável)