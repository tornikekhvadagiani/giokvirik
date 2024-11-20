const noBtn = document.querySelector(".no");
const yesBtn = document.querySelector(".yes");

function randomNum(random) {
  return Math.floor(Math.random() * random) + 1;
}

let fontSize = 18;

function moveNoBtn() {
  noBtn.setAttribute("disabled", true);
  noBtn.style.transform = `translate(${randomNum(500)}px, ${randomNum(500)}px)`;

  yesBtn.style.fontSize = `${fontSize}px`;
  fontSize += 10;
}

function leaveBtn() {
  noBtn.removeAttribute("disabled");
}

noBtn.addEventListener("mouseover", () => {
  moveNoBtn();
  noBtn.removeEventListener("mouseover", moveNoBtn);
});

noBtn.addEventListener("mouseleave", () => {
  leaveBtn();
  noBtn.removeEventListener("mouseleave", leaveBtn);
});
