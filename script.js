//your code here
const response = document.querySelector('#response');
const random = Math.floor(Math.random() * (20 - 1 + 1) + 1);
response.innerHtml = random;

const checking = docuemnt.querySelector('.checking');
checking.addEventListener('click', function (e) {
	e.preventDefault();
	
})