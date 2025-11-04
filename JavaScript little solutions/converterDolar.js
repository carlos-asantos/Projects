//Código básico para fazer conversões de dólar para real
console.log(calcularConversao(25.80));

function calcularConversao(valorEmReais) {
    valorDolar = 4.8;
    valorEmDolares = valorEmReais * valorDolar;
    return valorEmDolares.toFixed(2);
}
