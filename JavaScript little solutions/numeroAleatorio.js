// Código básico feito em JavaScript para gerar um número inteiro e aleatório entre 1 e 100

function gerarNumero() {
    let numeroAleatorio = parseInt(Math.random() * 100 + 1);
    printarTextoNaTela('h2', numeroAleatorio);
}

function printarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
