function pegarNomeDaTask() {
    let nomeDaTask = document.querySelector('textarea').value;
    limparCampo()
    return nomeDaTask;
}

function createTask() {
    let arrayDasTasks = document.getElementsByClassName('task');
    let criarTasks = document.getElementById('tasksList');
    const taskName = pegarNomeDaTask();
    let numeroDaTask = arrayDasTasks.length
    const texto = `<div class="task"><p>${taskName}</p><input type="checkbox" class="checkbox " id="taskFeita" onchange="taskFoiFeita(${numeroDaTask})"></div>`;
    criarTasks.innerHTML += texto;
}

function limparCampo() {
    campo = document.querySelector('textarea');
    campo.value = '';
}

function taskFoiFeita(numeroDaTask) {
    let tasks = document.getElementsByClassName('task');
    tasks[numeroDaTask].classList.add('taskFoiFeita');
}