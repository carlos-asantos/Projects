// Cálculo básico de fatorial usando JavaScript

calcularFatorial(4);

function calcularFatorial(numeroInicial) {
    let fatorial = numeroInicial;
    fatorial--;
    do{
    numeroInicial = parseInt(numeroInicial * fatorial);
    fatorial--;
    } while(fatorial > 0)
    console.log(numeroInicial);
}
