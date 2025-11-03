// Código básico feito em JavaScript para converter temperaturas em graus celsius para graus fahrenheit

function converterCelsius() {
    let celsius = document.getElementById('entrada').value;
    let fahrenheit = (celsius * 9/5) + 32;
    printarTextoNaTela('h2', fahrenheit);

}

function printarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
