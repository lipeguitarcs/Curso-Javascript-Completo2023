function calcularMedia() {
    // Verifica se não há parâmetros ou se os parâmetros não são números
    if (arguments.length === 0) {
        return "0";
    }

    let total = 0;
    let contador = 0;

    // Itera pelos argumentos e verifica se são números
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number' || isNaN(arguments[i])) {
            throw Error("Apenas números");
        }
        total += arguments[i];
        contador++;
    }

    // Calcula a média
    const media = total / contador;
    return media;
}

// Exemplos de uso da função
console.log(calcularMedia(2, 4, 6)); // Saída: 4
console.log(calcularMedia(10, 5, 8, 2)); // Saída: 6.25
console.log(calcularMedia()); // Saída: "0"
console.log(calcularMedia(2, "a", 6)); // Saída: "Error"