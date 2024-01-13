const body = document.body;
const endTime = new Date('December 24 2024 23:59:59');
const dias = document.getElementById('dia');
const horas = document.getElementById('hora');
const minutos = document.getElementById('minuto');
const segundos = document.getElementById('segundo');


setInterval(regressiva, 1000)

function regressiva() {
	const startTime = new Date();
	const diff = endTime - startTime;
	const days = Math.floor(diff / 1000 / 60 / 60 / 24);
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
	const seconds = Math.floor(diff / 1000) % 60;
	dias.innerHTML = days;
	horas.innerHTML = hours < 10 ? '0'+hours : hours;
	minutos.innerHTML = minutes < 10 ? '0'+minutes : minutes;
	segundos.innerHTML = seconds < 10 ? '0'+seconds : seconds;
}


