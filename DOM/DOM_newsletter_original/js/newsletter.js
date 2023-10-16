(function () {

    const txtEmail = document.getElementById("txtEmail")
    const msgFeedback = document.getElementById("newsletterFeedback")
    let email = txtEmail.value
    console.log(txtEmail.value)

    function cadastrarEmail(){
        let email = txtEmail.value
        msgFeedback.innerHTML = `O email ${email} foi cadastrado com sucesso`
    }

    const btnEnviar = document.getElementById("btn");
    btnEnviar.addEventListener("click", cadastrarEmail);
})()