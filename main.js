window.addEventListener("DOMContentLoaded", main);

/**Global message, used in the end of game */
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
  const Item1 = document.getElementsByClassName("showInventory"); //Inventory
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
    updateInventoryCount();
    showMessageRightAnswer(nextPage);
    playCorrectSound();
  } else if (isCorrect === false) {
    showMessageWrongAnswer(nextPage);
    playWrongSound();
  }
}

/**Update inventory length to show quantity*/
function updateInventoryCount() {
  const inventoryCount = document.getElementsByClassName("item0");
  inventoryCount.textContent = inventory.length;
  console.log(inventory);
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
    document.body.style.backgroundImage = "URL('Items/wrongEnd.png')";
    hideMission();
    message.className = "end-text";
    message.textContent =
      "Åh vad synd! Du har samlat ihop så få julkulor att du inte vann mer än några grankvistar! Försök en gång till!";
    document.body.appendChild(message);
  } else if (activepage === 5 && inventory.length > 4) {
    document.body.style.backgroundImage = "URL('Items/rightEnd.png')";
    hideMission();
    message.className = "end-text";
    message.textContent =
      "Du har samlat ihop många julkulor och lyckats få den finaste granen! ";
    document.body.appendChild(message);
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
