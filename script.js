//your code here
const response = document.querySelector("#respond");
const random = Math.floor(Math.random() * (20 - 1 + 1) + 1);

let numOfGuess = 1;
let prevDiff = 0;

const checking = document.querySelector(".checking");


checking.addEventListener("click", function (e) {
  e.preventDefault();
  const guessed = document.querySelector("#guess").value;
  if (numOfGuess < 2) {
    if (guessed < random) {
      response.textContent = "guess higher";
    } else if (guessed > random) {
      response.textContent = "guess lower";
    }
  } else {
    let diff = guessed - random;
    if (diff < prevDiff) {
      response.textContent = "getting hotter";
    } else if (guessed < random) {
      response.textContent = "guess higher";
    } else if (guessed > random) {
      response.textContent = "guess lower";
    }
  }
  prevDiff = guessed - random;
  numOfGuess++;
});
