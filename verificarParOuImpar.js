//Código básico feito em JavaScript para verificar se o número é par ou ímpar

function parOuImpar() {
    let numero = document.querySelector('input').value
    if(Number.isInteger(numero / 2)) {
        let texto = `O número ${numero} é par`;
        printarTexto('h2', texto);
    } else {
        texto = `O número ${numero} é ímpar`;
        printarTexto('h2', texto);
    }
}

function printarTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
