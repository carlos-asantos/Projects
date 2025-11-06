function pegarNomeDaTask() {
    let nomeDaTask = document.querySelector('textarea').value;
    console.log(nomeDaTask);
    limparCampo()
}

function limparCampo() {
    campo = document.querySelector('textarea');
    campo.value = '';
}