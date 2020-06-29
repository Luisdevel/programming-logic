const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaTarefa(textoInput) {
	const li = document.createElement('li');
	li.innerText = textoInput;
	tarefas.appendChild(li);
	limpaInput();
	criaBotao(li); 
	salvaTarefa();
}

function limpaInput() {
	inputTarefa.value = '';
	inputTarefa.focus();
}

function criaBotao(li) {
	const btnApagar = document.createElement('button');
	btnApagar.setAttribute('class', 'apagar');
	btnApagar.setAttribute('title', 'Apaga esta tarefa');
	btnApagar.innerText = 'Apagar';
	li.innerText += ' ';
	li.appendChild(btnApagar);
}

function salvaTarefa() {
	const liTarefa = tarefas.querySelectorAll('li');
	const tarefaArray = [];

	for(let tarefa of liTarefa) {
		let tarefaTexto = tarefa.innerText;
		tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
		tarefaArray.push(tarefaTexto);
	}

	const tarefaJSON = JSON.stringify(tarefaArray);
	localStorage.setItem('tarefas', tarefaJSON);
}

function FixaTarefaNavegador() {
	const tarefas = localStorage.getItem('tarefas');
	const arrayTarefas = JSON.parse(tarefas);

	for (let tarefa of arrayTarefas) {
		criaTarefa(tarefa);
	}
}

inputTarefa.addEventListener('keypress', function(e) {
	if(e.keyCode === 13) {
		if(!inputTarefa.value) return;
		criaTarefa(inputTarefa.value);
	}
});

btnTarefa.addEventListener('click', function() {
	if(!inputTarefa.value) return;
	criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
	const el = e.target;
	
	if(el.classList.contains('apagar')) {
		el.parentElement.remove();
		salvaTarefa();
	}
});

FixaTarefaNavegador();