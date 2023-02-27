//your code here
const guessed = Number(document.querySelector('#response').value);
const response = document.querySelector('#response');
const random = Math.floor(Math.random() * (20 - 1 + 1) + 1);
response.innerHtml = random;

let numOfGuess = 0;
const checking = docuemnt.querySelector('.checking');
checking.addEventListener('click', function (e) {
	e.preventDefault();
	if(numOfGuess < 2) {
		if(guessed < random) {
			response.textContent = 'guess higher';
		}
		else {
			response.textContent = 'guess lower';
		}
	} else {
		let diff = guessed - random;
		if(diff < prevDiff) {
			response.textContent = 'getting hotter';
		}
		else if(guessed < random) {
			response.textContent = 'guess higher';
		}
		else {
			response.textContent = 'guess lower';
		}
	}
	let prevDiff = guessed - random;
	numOfGuess++;
})