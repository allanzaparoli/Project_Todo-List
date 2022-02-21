const takeIncluir = document.getElementById('texto-tarefa');
const btn = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const btnApagaTudo = document.getElementById('apaga-tudo');
const btnApagaFinalizados = document.getElementById('remover-finalizados');

function includText() {
  const newText = document.createElement('li');
  newText.innerText = takeIncluir.value;
  newText.classList.add('newTexto');
  listaTarefas.appendChild(newText);
  takeIncluir.value = '';
}
btn.addEventListener('click', includText);

function colorItem(event) {
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    listaTarefas.children[index].classList.remove('corGray');
  }
  if (event.target.className === 'newTexto') {
    event.target.classList.add('corGray');
  } else {
    event.target.classList.remove('corGray');
  }
}
listaTarefas.addEventListener('click', colorItem);

function duploclick(event) {
  if (event.target.className === 'newTexto corGray') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}
listaTarefas.addEventListener('dblclick', duploclick);

function removeFinalizados() {
  for (let index = listaTarefas.children.length - 1; index >= 0; index -= 1) {
    if (listaTarefas.children[index].className.includes('completed')) {
      listaTarefas.children[index].remove();
    }
  }
}
btnApagaFinalizados.addEventListener('click', removeFinalizados);

function apagarTudo() {
  listaTarefas.innerHTML = '';
}
btnApagaTudo.addEventListener('click', apagarTudo);
