function CreatetHour(sec) {
	const date = new Date(sec * 1000);
	return date.toLocaleTimeString('pt-BR', {
		hour12: false,
		timeZone: 'UTC'
	});
}

console.log(CreatetHour(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let seconds = 0;
let timer;

function StartHour() {
	timer = setInterval(() => {
		seconds++;
		relogio.innerHTML = (CreatetHour(seconds));
	}, 1000);
}

document.addEventListener('click', (e) => {
	const el = e.target;
	
	if(el.classList.contains('iniciar')) {
		clearInterval(timer);
		relogio.classList.remove('pause');
		StartHour();
	}
	
	if(el.classList.contains('pausar')) {
		clearInterval(timer);
		relogio.classList.add('pause');
		
	}

	if(el.classList.contains('zerar')) {
		clearInterval(timer);
		relogio.classList.remove('pause');
		relogio.innerHTML = '00:00:00';
		seconds = 0;
	}
});