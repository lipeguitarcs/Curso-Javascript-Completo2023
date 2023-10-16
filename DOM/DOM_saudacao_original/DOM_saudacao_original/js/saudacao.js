(function(){
    const nomeUsuario = null
    const elemento = document.querySelector(".top-bar p")
    if (nomeUsuario) {
        // document.querySelector(".top-bar p").textContent += nomeUsuario
        elemento.innerHTML += "<b>" + nomeUsuario + "</b>"

    } else {
        // elemento.parentElement.style.display = "none"
        // elemento.remove()
        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }
    console.log(elemento)
})()