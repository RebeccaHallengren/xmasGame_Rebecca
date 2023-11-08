window.addEventListener("DOMContentLoaded", main);

function main() {
  startGame();
  moveOn();
}

function startGame() {
  const startHeader = document.querySelector(".introHeader");
  const startText = document.querySelector(".introDescription");
  const startInput = document.querySelector(".inputName");
  const startButton = document.querySelector("#introBtn");

  startHeader.textContent = firstPage.HeaderStart;
  startText.textContent = firstPage.TextStart;
  startInput.textContent = firstPage.InputStart;
  startButton.textContent = firstPage.BtnStart.Text;

  startButton.addEventListener("click", function () {
    addName();
  });
}

function moveOn() {
  const header = document.querySelector(".missionHeader");
  const text = document.querySelector(".missionDescription");
  const Button1 = document.querySelector("#option0");
  const Button2 = document.querySelector("#option1");
  const Button3 = document.querySelector("#option2");
  const Item1 = document.getElementsByClassName("item0"); //INVENTORY?
  const body = document.getElementById("body");

  const page = pages[activepage]; //Pages ligger i missions, och active page är nu 0.

  header.textContent = page.Headers;
  text.textContent = page.Text;
  Button1.textContent = page.Btn1.Text;
  Button2.textContent = page.Btn2.Text;
  Button3.textContent = page.Btn3.Text;

  body.style.backgroundImage = page.backgroundImage;

  Button1.onclick = function () {
    checkAnswer(page.Btn1.isCorrect, page.Item1, page.Btn1.nextPage); //true/false
    // goToNextpage(page.Btn1.nextPage);
  };

  Button2.onclick = function () {
    checkAnswer(page.Btn2.isCorrect, page.Item1, page.Btn2.nextPage);
    // goToNextpage(page.Btn2.nextPage);
  };

  Button3.onclick = function () {
    checkAnswer(page.Btn3.isCorrect, page.Item1, page.Btn3.nextPage);
    // goToNextpage(page.Btn3.nextPage);
  };
}

function checkAnswer(isCorrect, item, nextPage) {
  if (isCorrect === true) {
    inventory.push(item);
    showMessageBox(nextPage);
  } else if (isCorrect === false) {
    goToNextpage(nextPage);
  }
}

function showMessageBox(nextPage) {
  const rightAnswer = document.querySelector(".rightAnswer");

  rightAnswer.style.display = "block";

  setTimeout(function () {
    rightAnswer.style.display = "none";
    goToNextpage(nextPage);
  }, 3000);
}

function goToNextpage(pageIndex) {
  activepage = pageIndex;
  moveOn();
}

//Till förstasidan.

function addName() {
  const button = document.getElementById("introBtn");
  button.onclick = function () {
    const input = document.getElementById("stringName");
    const name = document.getElementById("name");

    name.innerHTML = "Tomtenissen " + stringName.value + " räddar julen!";
  };
}
