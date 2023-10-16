let n = "global";

function mostraN(){
    let n1 = "n1 local";
    
    if(true){
        var n2 = "n2 dentro de if com var"
        // var funciona fora das funções, let não
    }
    console.log(n2);
    console.log("Valor de n1: " + n1);
    console.log("Valor de n2: " + n2);
};

mostraN();

console.log("Valor de n no escopo global: " + n);

function fnExt(){
    let n = "n local na função fnExt"

    function fnInt(){
        let n  = "n local na função fnInt";
        console.log(n);
    }
    fnInt();
    console.log(n);
}

fnExt();