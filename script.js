let aiguilleDesHeures = document.querySelector('#heure');
let aiguilleDesMinutes = document.querySelector('.aiguilles .minute');
let aiguilleDesSecondes = document.querySelector('.aiguilles .seconde');

window.setInterval( function horloge() {
	let today = new Date();
	let heuresActuel = today.getHours();
	let minutesActuel = today.getMinutes();
	let secondesActuel = today.getSeconds();
	let hoursAngle = heuresActuel * 30;
	let minutesAngle = minutesActuel * 6;
	let secondesAngle = secondesActuel * 6;
	aiguilleDesHeures.style.transform = 'rotate('+hoursAngle+'deg)';
	aiguilleDesMinutes.style.transform = 'rotate('+minutesAngle+'deg)';
	aiguilleDesSecondes.style.transform = 'rotate('+secondesAngle+'deg)';
}
	, 1000 );
