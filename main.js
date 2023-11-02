window.addEventListener("DOMContentLoaded", main);

function main() {
  startTheGame();
  //changeMisson ();
  //decorateTree();
}

function startTheGame() {
  const text = document.querySelector(".introHeader .introDescription");
  const button = document.getElementById("introBtn");

  //Knapp för att spara användarens namn.
  button.onclick = function () {
    const input = document.getElementById("stringName");
    const name = document.querySelector(".name");

    name.innerHTML = "Tomtenissen " + stringName.value + " räddar julen!";
  };
}

const startGameBtn = document.getElementById("").toString();

let activemission = 0;
