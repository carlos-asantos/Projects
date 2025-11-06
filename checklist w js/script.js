function pegarNomeDaTask() {
    let nomeDaTask = document.querySelector('textarea').value;
    console.log(nomeDaTask);
    limparCampo()
}

function createTask() {
    let criarTasks = document.getElementById('tasksList');
    const taskName = pegarNomeDaTask();
    let texto = `<div class="task"><p>${taskName}</p><input type="checkbox" id="taskFeita"></div>`;
    criarTasks.innerHTML = texto;
}

function limparCampo() {
    campo = document.querySelector('textarea');
    campo.value = '';
}

function taskFoiFeita() {
    const taskFeita = document.getElementById('taskFeita').checked;
    if(taskFeita) {
        
    }
}