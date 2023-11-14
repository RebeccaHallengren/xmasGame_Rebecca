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

/**Array for christmas spirit symbol */
let inventory = [];

/**Not needed in this case, can be used to get a good overview of the flow */
function main() {
  loadGameFromLS();
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
  const Item1 = document.getElementById("item0"); //Inventory
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
    saveGameToLS();
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
  const inventoryCount = document.querySelector("#item0");
  inventoryCount.textContent = inventory.length;
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

    decreaseInventory();
  }
}

/**Remove item from the inventory with delay*/
function decreaseInventory() {
  for (let i = inventory.length - 1; i >= 0; i--) {
    const item = inventory[i];
    setTimeout(function () {
      inventory.pop();
      displayInventoryCount();
      displayItem();
    }, 1000 * (inventory.length - i));
  }
}

/**Displays the inventory-symbol at a random postion*/
function displayItem() {
  const XmasSpirit = document.getElementById("inventorySymbol");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const randomX = Math.floor(Math.random() * (windowWidth - 50));
  const randomY = Math.floor(Math.random() * (windowHeight - 50));

  XmasSpirit.style.position = "absolute";
  XmasSpirit.style.left = randomX + "px";
  XmasSpirit.style.top = randomY + "px";
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

/**Saves inventory and activepage to local storage */
function saveGameToLS() {
  const saveData = {
    inventory: inventory,
    activepage: activepage,
  };

  localStorage.setItem("saveData", JSON.stringify(saveData));
}

/**Loads inventory and activepage from local storage. If the saved data is found, it updates the game */
function loadGameFromLS() {
  const savedDataString = localStorage.getItem("saveData");
  if (savedDataString) {
    const savedData = JSON.parse(savedDataString);
    inventory = savedData.inventory;
    activepage = savedData.activepage;
  }
}

/* function saveGameToLS() {
  const inventoryString = JSON.stringify(inventory);
  localStorage.setItem("inventory", inventoryString);
}

function loadGameFromLS() {
  if (localStorage.key("inventory")) {
    const inventoryString = localStorage.getItem("inventory");
    inventory = JSON.parse(inventoryString);
  }
} */

/* function addName() {
    const button = document.getElementById("introBtn");
    button.onclick = function () {
      const input = document.getElementById("stringName");
      const name = document.getElementById("name");
  
      name.innerHTML = "Tomtenissen " + stringName.value + " räddar julen!";
    };
} */
