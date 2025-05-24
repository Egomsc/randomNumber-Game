`use strict`;

// gettingt the secret Number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

// get the input value
document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".guess").value);

  if (!inputNumber) {
    document.querySelector(".message").textContent = "👌No input Value😒";
  } else if (inputNumber === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    highscore++;
    document.querySelector(".message").textContent = "👋🫂👍Correct👍🫂👋👋";
    document.querySelector("h1").textContent =
      "👋👍🤔Congratulations, You won!!👋👍😤";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".highscore").textContent = highscore + `⭐`;

    if (highscore === 100) {
      document.querySelector("h1").textContent =
        "Unbeatable 100%,🥇🥇⭐⭐⭐⭐⭐";
      document.querySelector(".highscore").textContent = "100%";
      return;
    }
  } else if (inputNumber > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "Too high";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent =
        "You have lost the game!!";
      document.querySelector("h1").textContent = "🤣🤣🤣🤦You Lost!!🤦😎😎";
    }
  } else if (inputNumber < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "Too low";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent =
        "You have lost the game!!";
      document.querySelector("h1").textContent = "🤣🤣🤣🤦Game over🤦😎😎";
    }
  }
});

document.querySelector(".again").addEventListener(`click`, function () {
  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing....";
  document.querySelector("body").style.backgroundColor = "#222";
});
