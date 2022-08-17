// **** Selectors*****
const btnDice = document.querySelector(".btn-dice");

window.addEventListener("DOMContentLoaded", () => {
  getAdvice();
});

// ***generate random advice***
btnDice.addEventListener("click", () => {
  getAdvice();
});

// ***generate advice from api**
function getAdvice() {
  fetch("https://api.adviceslip.com/advice").then((res) =>
    res
      .json()
      .then((data) => {
        const adviceBody = document.querySelector(".advice-body");
        const adviceNumber = document.querySelector(".advice-number");
        const span = adviceNumber.querySelector("span");
        adviceBody.innerText = `"${data.slip.advice}"`;
        span.innerText = `#${data.slip.id}`;
      })
      .catch((err) => {
        console.log(err);
      })
  );
}
