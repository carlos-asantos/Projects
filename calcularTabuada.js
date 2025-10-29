// Código básico para calcular a tabuada de um número passado pelo usuário

console.log(calcularTabuada(6));

function calcularTabuada(numero) {
    let tabuada = [];
    for(limite = 1; limite < 11; limite++) {
        tabuada.push(numero * limite);
    }
    return tabuada;
}
