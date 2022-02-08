const correctAnswers = ["B", "A", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
const scoreDisplay = document.querySelector(".result-span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  // Show the result on page
  scrollTo(0, 0);
  result.classList.remove("d-none");

  // Increment our output every 10ms to the point it's equal to the score.
  let output = 0;
  const timer = setInterval(() => {
    scoreDisplay.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

let i = 0;
const timer = setInterval(() => {
  i++;
  if (i === 3) {
    clearInterval(timer);
  }
}, 1000);
