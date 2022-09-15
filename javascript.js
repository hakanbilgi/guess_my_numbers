//? 1-100 arasinda rasgele bir sayi tut.

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? checkBtn basildiğinda kontrolleri yap.
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");

  if (!guessInput) {
    msg.innerText = "please enter a number";
  } else if (randomNumber === guessInput) {
    msg.innerText = "Congrats You Win";
    document.querySelector("body").style.background="green";
  }
});
