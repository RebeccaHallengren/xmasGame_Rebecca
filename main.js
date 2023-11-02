window.addEventListener("DOMContentLoaded", main);

function main() {
  moveOn();
}

function moveOn() {
  const header = document.querySelector(".introHeader");
  const text = document.querySelector(".introDescription");
  const Button1 = document.querySelector("#option0");
  const Button2 = document.querySelector("#option1");
  const Button3 = document.querySelector("#option2");
  const body = document.getElementById("body");

  const page = pages[activepage]; //Pages ligger i missions, och active page är nu 0.

  header.textContent = page.Headers;
  text.textContent = page.Text;
  Button1.textContent = page.Btn1.Text;
  Button2.textContent = page.Btn2.Text;
  Button3.textContent = page.Btn3.Text;
  body.style.backgroundImage = page.backgroundImage;

  Button1.onclick = function () {
    goToNextpage(page.Btn1.nextPage);
  };

  Button2.onclick = function () {
    goToNextpage(page.Btn2.nextPage);
  };

  Button3.onclick = function () {
    goToNextpage(page.Btn3.nextPage);
  };
}

function goToNextpage(pageIndex) {
  activepage = pageIndex;
  moveOn();
}
//Knapp för att spara användarens namn.
function addName() {
  const button = document.getElementById("introBtn");

  button.onclick = function () {
    const input = document.getElementById("stringName");
    const name = document.querySelector(".name");

    name.innerHTML = "Tomtenissen " + stringName.value + " räddar julen!";
  };
}
