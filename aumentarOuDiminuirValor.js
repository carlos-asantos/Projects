// Código básico feito em JavaScript para aumentar e diminuir o valor de um número através de dois botões diferentes

let numero = 0;
printarTextoNaTela('h2', numero);
function diminuirNumero() {
    numero--;
    printarTextoNaTela('h2', numero);
};

function aumentarNumero() {
    numero++;
    printarTextoNaTela('h2', numero);
};

function printarTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};
