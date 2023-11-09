window.addEventListener("DOMContentLoaded", main);

let inventory = [];

function main() {
  moveOn();
}

//Till förstasidan. Har ej lagt in funktionen ännu.

/* function addName() {
    const button = document.getElementById("introBtn");
    button.onclick = function () {
      const input = document.getElementById("stringName");
      const name = document.getElementById("name");
  
      name.innerHTML = "Tomtenissen " + stringName.value + " räddar julen!";
    };
} */

/* function startTheGame(firstPage) {
  const firstPagePlaceholder = document.querySelector("#startpage");

  const start = document.createElement("div");
  start.className = "firstPage";

  const title = document.createElement("h1");
  title.textContent = firstPage.HeaderStart;

  const discription = document.createElement("p");
  discription.className = "intro";
  discription.textContent = firstPage.TextStart;

  const startButton = document.createElement("button");
  startButton.className = "startButton";
  startButton.textContent = firstPage.BtnStart.Text;

  firstPagePlaceholder.append(firstPage);

  startButton.onclick = function () {
    moveOn();
  }; */

// hämtar hem alla positioner i html, hämtar uppgifter från arrayen "missions" och hanterar onclickfunktionerna i varje "scene"
function moveOn() {
  const header = document.querySelector(".missionHeader");
  const text = document.querySelector(".missionDescription");
  const Button1 = document.querySelector("#option0");
  const Button2 = document.querySelector("#option1");
  const Button3 = document.querySelector("#option2");
  const Item1 = document.getElementsByClassName("showInventory"); //INVENTORY?
  const body = document.getElementById("body");

  const page = pages[activepage]; //Pages ligger i missions, och active page är nu 0.

  header.textContent = page.Headers;
  text.textContent = page.Text;
  Button1.textContent = page.Btn1.Text;
  Button2.textContent = page.Btn2.Text;
  Button3.textContent = page.Btn3.Text;

  body.style.backgroundImage = page.backgroundImage;

  Button1.onclick = function () {
    hideMission();
    checkAnswer(page.Btn1.isCorrect, page.Item1, page.Btn1.nextPage); //true/false
    checkEnd();
    // goToNextpage(page.Btn1.nextPage);
  };

  Button2.onclick = function () {
    hideMission();
    checkAnswer(page.Btn2.isCorrect, page.Item1, page.Btn2.nextPage);
    checkEnd();

    // goToNextpage(page.Btn2.nextPage);
  };

  Button3.onclick = function () {
    hideMission();
    checkAnswer(page.Btn3.isCorrect, page.Item1, page.Btn3.nextPage);
    checkEnd();

    // goToNextpage(page.Btn3.nextPage);
  };
}

function checkEnd() {
  if (activepage === 5 && inventory.length <= 4) {
    document.body.style.backgroundImage = "URL('Items/BackgroundStart.png')";
    hideMission();
  } else if (activepage === 5 && inventory.length > 4) {
    document.body.style.backgroundImage = "URL('Items/tree.jpg')";
    hideMission();
  }
}

//Funktionen går igenom alla element i hidden och döljer dem.
function hideMission() {
  const hidden = document.querySelectorAll(".missionWrapper");
  hidden.forEach(function (element) {
    element.style.display = "none";
  });
}

//funktionen kollar om användaren sparat rätt eller fel, lägger till item1 i inventoryn vid rätt svar och visar ett meddelande till användaren
function checkAnswer(isCorrect, Item1, nextPage) {
  if (isCorrect === true) {
    inventory.push(Item1);
    updateInventoryCount();
    showMessageRightAnswer(nextPage);

    /* return page; */
  } else if (isCorrect === false) {
    showMessageWrongAnswer(nextPage);
  }
}

//Funktionen ska uppdatera inventoryns antal .length
function updateInventoryCount() {
  const inventoryCount = document.getElementsByClassName("item0");
  inventoryCount.textContent = inventory.length;
  console.log(inventory);
}

//Kan man slå ihop right and wrong answer?? If / else
// meddelande om användaren svarar rätt
function showMessageRightAnswer(nextPage) {
  const rightAnswer = document.querySelector(".rightAnswer");
  rightAnswer.style.display = "grid";
  rightAnswer.style.placeItems = "center";

  setTimeout(function () {
    rightAnswer.style.display = "none";
    goToNextpage(nextPage);
  }, 3000);
}

//meddelande om användaren svarar fel
function showMessageWrongAnswer(nextPage) {
  const wrongAnswer = document.querySelector(".wrongAnswer");
  wrongAnswer.style.display = "grid";
  wrongAnswer.style.placeItems = "center";

  setTimeout(function () {
    wrongAnswer.style.display = "none";
    goToNextpage(nextPage);
  }, 3000);
}

//gå till nästa sida och display element som varit följt i hidden
function goToNextpage(pageIndex) {
  const hidden = document.querySelectorAll(".missionWrapper");
  hidden.forEach(function (element) {
    element.style.display = "block";
  });
  activepage = pageIndex;
  moveOn();
}
