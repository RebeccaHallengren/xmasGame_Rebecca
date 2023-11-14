window.addEventListener("DOMContentLoaded", main);

/**Global message, used in the end of game
 * @type {HTMLDataElement}
 */
let message = document.createElement("h1");

/** Global sound*/
const correctSound = new Audio("Items/rightAnswerSound.mp3");
const WrongSound = new Audio("Items/wrongAnswerSound.mp3");

/** Get sounds from variabel correctSound and plays it*/
function playCorrectSound() {
  correctSound.play();
}
/** Get sounds from variabel WrongSound and plays it*/
function playWrongSound() {
  WrongSound.play();
}

/**Array for christmasballs */
let inventory = [];

/**Not needed in this case, can be used to get a good overview of the flow */
function main() {
  /* checkStart(); */
  moveOn();
}

/**This function fetches HTML elements related to the mission information,
 * updates the content of these elements with the current mission's details,
 * and sets up click event handlers for the mission buttons to check answers
 * and handle progression to the next page.  */

function moveOn() {
  const header = document.querySelector(".missionHeader");
  const text = document.querySelector(".missionDescription");
  const Button1 = document.querySelector("#option0");
  const Button2 = document.querySelector("#option1");
  const Button3 = document.querySelector("#option2");
  const Item1 = document.getElementsByClassName("item0"); //Inventory
  const body = document.getElementById("body");
  //Activepage from mission array
  const page = pages[activepage];

  header.textContent = page.Headers;
  text.textContent = page.Text;
  Button1.textContent = page.Btn1.Text;
  Button2.textContent = page.Btn2.Text;
  Button3.textContent = page.Btn3.Text;

  body.style.backgroundImage = page.backgroundImage;

  Button1.onclick = function () {
    hideMission();
    checkAnswer(page.Btn1.isCorrect, page.Item1, page.Btn1.nextPage);
    checkEnd();
  };

  Button2.onclick = function () {
    hideMission();
    checkAnswer(page.Btn2.isCorrect, page.Item1, page.Btn2.nextPage);
    checkEnd();
  };

  Button3.onclick = function () {
    hideMission();
    checkAnswer(page.Btn3.isCorrect, page.Item1, page.Btn3.nextPage);
    checkEnd();
  };
}

/**Hiding all elements inside missionwrapper */
function hideMission() {
  const hidden = document.querySelectorAll(".missionWrapper");
  hidden.forEach(function (element) {
    element.style.display = "none";
  });
}

/**Check if the user has answered right or wrong depending of isCorrect under mission.
 * If right answer, item1 is pushed to the inventory.
 * @param {boolean} isCorrect
 * @param {number} Item1
 * @param {number} nextPage
 *
 */
function checkAnswer(isCorrect, Item1, nextPage) {
  if (isCorrect === true) {
    inventory.push(Item1);
    displayInventoryCount();
    showMessageRightAnswer(nextPage);
    playCorrectSound();
  } else if (isCorrect === false) {
    showMessageWrongAnswer(nextPage);
    playWrongSound();
  }
}

/**Update inventory length to show quantity*/
function displayInventoryCount() {
  const inventoryCount = document.querySelector(".item0");
  inventoryCount.textContent = inventory.length;

  /*  let currentCount = parseInt(inventory.innerText);
  inventory.innerText = currentCount + 1; */
}
/**criteria for when the correct answer should be displayed. On index 5 nothing is displayed.
 * @param {number} nextPage
 */

function showMessageRightAnswer(nextPage) {
  if (activepage === 5) {
  } else {
    const rightAnswer = document.querySelector(".rightAnswer");
    rightAnswer.style.display = "grid";
    rightAnswer.style.placeItems = "center";
    //**the message for the right answer is displayed for two seconds before the next page*/
    setTimeout(function () {
      rightAnswer.style.display = "none";
      goToNextpage(nextPage);
    }, 2000);
  }
}

/**criteria for when the wrong answer should be displayed. On index 5 nothing is displayed.
 * @param {number} nextPage
 */
function showMessageWrongAnswer(nextPage) {
  if (activepage === 5) {
  } else {
    const wrongAnswer = document.querySelector(".wrongAnswer");
    wrongAnswer.style.display = "grid";
    wrongAnswer.style.placeItems = "center";
    /**the message for the wrong answer is displayed for two seconds before the next page*/
    setTimeout(function () {
      wrongAnswer.style.display = "none";
      goToNextpage(nextPage);
    }, 2000);
  }
}

/**criteria of the end-message show. Last index of array is 5*/
function checkEnd() {
  if (activepage === 5 && inventory.length <= 4) {
    document.body.style.backgroundImage = "URL('Items/Grinch.png')";
    hideMission();
    message.className = "end-text";
    message.textContent =
      "Du har inte spridit något julglädje alls, du är en grinch!";
    document.body.appendChild(message);
  } else if (activepage === 5 && inventory.length > 4) {
    document.body.style.backgroundImage = "URL('Items/rightEnd.png')";
    hideMission();
    message.className = "end-text";
    message.textContent = "Bra jobbat du har verkligen spridit julklädje!";
    document.body.appendChild(message);

    displayEnd();
  }
}

function displayEnd() {
  for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];
    setTimeout(function () {
      console.log(item);
    }, 1000 * i);
  }
}

/**go to next page and show missionwrapper again
 * @param {number} nextPage
 */
function goToNextpage(pageIndex) {
  const hidden = document.querySelectorAll(".missionWrapper");
  hidden.forEach(function (element) {
    element.style.display = "block";
  });
  activepage = pageIndex;
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

/* //VARFÖR FUNGERAR DET INTE??
function checkStart() {
  const gameHeader = document.querySelector(".gameHeader");
  const gameText = document.querySelector(".gameText");
  const startGameBtn = document.querySelector(".startGame");

  if (activepage === 0) {
    hideMission();
    gameHeader.textContent = "Avhjälp Tomten och sprid julglädje!";
    gameText.textContent =
      "Julen är snart här och det är en magisk atmosfär. Tomtens förberedelser är många och han varje dag problem stånga. Eftersom du en nisse är, du behöver avhjälpa tomten med allt vad det innebär. Om allt faller väl ut, du sprider glädje vid varje husknut.";
    startGameBtn.textContent = "Starta spel!";

    document.body.appendChild(gameHeader);
    document.body.appendChild(gameText);
    document.body.appendChild(startGameBtn);
  } else {
    gameHeader.textContent = "";
    gameText.textContent = "";
  }
} */
