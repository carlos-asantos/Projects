// Código básico para calcular o perímetro de uma sala
const medidas = [];
let largura = prompt("Qual a largura da sala?");
let comprimento = prompt("Qual o comprimento da sala?");
medidas.push(largura);
medidas.push(comprimento);

console.log(calcularPerimetro([ medidas ]));

function calcularPerimetro([ medidas ]) {
    let perimetro = medidas[0] * medidas[1];
    return perimetro;
}
