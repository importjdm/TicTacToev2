//check check
//functions (board, controling, players, displaying)

//making the game board
const gameBoard = () => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  return { getBoard };
};

//Displaying the game board (making it display 3x3)
const displaying = () => {
  const domBoard = document.querySelector(".board");

  const board = gameBoard();
  const playingBoard = board.getBoard();

  const displayBoard = () => {
    playingBoard.forEach((cell, index) => {
      let button = document.createElement("button");
      button.classList.add("cell");
      button.dataset.id = index;
      domBoard.appendChild(button);
    });
  };

  return { displayBoard };
};

/* const display = displaying();
display.displayBoard(); */

//player logic
const players = () => {
  let nameForm = document.querySelector(".hidden");
  const display = displaying().cpDisplay;
  //const nameDisplay = dis

  /* let playerOne = {
    name: "",
    marker: "X",
  };
  let playerTwo = {
    name: "",
    marker: "O",
  }; */

  //Makes name form visible
  const FormVisible = () => {
    nameForm.classList.remove("hidden");
  };

  //pops up name form when start is clicked
  const start = () => {
    const startButton = document.querySelector(".start");
    const restartButton = document.querySelector(".unhide");
    startButton.addEventListener("click", () => {
      FormVisible();
      startButton.classList.add("hidden");
      restartButton.classList.remove("unhide");
    });
  };

  // add hidden class to hide form
  const formHidden = () => {
    nameForm.classList.add("hidden");
  };

  // player objects
  let playerOne = {
    marker: "X",
  };

  let playerTwo = {
    marker: "O",
  };

  const addingNames = () => {
    const nameOne = document.querySelector("#nameOne");
    const nameTwo = document.querySelector("#nameTwo");
    const newNameOne = nameOne.value;
    const newNameTwo = nameTwo.value;
    playerOne.name = newNameOne;
    playerTwo.name = newNameTwo;
  };

  let currentPLayer = playerOne;

  const changeCurrentPlayer = (newCurrentPLayer) => {
    if (newCurrentPLayer) {
      currentPLayer = playerTwo;
    } else {
      currentPLayer = playerOne;
    }
  };

  let getCurrentPlayer = () => currentPLayer;
  let getPlayerOne = () => playerOne;

  //when submit is pressed activated formHIdden function
  const submitButton = () => {
    const submitButton = document.querySelector(".submit");
    submitButton.addEventListener("click", () => {
      formHidden();
      addingNames();
    });
  };

  return {
    getCurrentPlayer,
    changeCurrentPlayer,
    start,
    submitButton,
    getPlayerOne,
  };
};

//controls needed to make the game function (no pun intended)
const boardControl = () => {
  //const displayGrid = displaying()
  const boardElement = document.querySelector(".board");
  const Dheading = document.querySelector(".displayHeadings");
  const player = players();
  const GUI = displaying();
  const rBtn = document.querySelector(".restart");
  let takenArray = [];
  let stopHeadDisplay = false;
  const startButton = player.start;
  const submitButton = player.submitButton;
  GUI.displayBoard();

  const cpDisplay = () => {
    const submit = document.querySelector(".submit");
    submit.addEventListener("click", () => {
      Dheading.innerText = player.getCurrentPlayer().name + "'s turn";
      boardElement.classList.remove("hidden");
    });
  };

  //controls players name displayed after then initial submit one
  const SwitchNameDisplayed = () => {
    Dheading.textContent = player.getCurrentPlayer().name + "'s turn!";
  };

  //when reset button is hit player one turn is displayed and is set to current player
  const resetNamesNTurn = () => {
    Dheading.textContent = player.getPlayerOne().name + "'s turn";
    player.changeCurrentPlayer(true);
    switchTurn();
  };

  //displays text declaring winning player
  const win = () => {
    stopHeadDisplay = true;
    Dheading.textContent = player.getCurrentPlayer().name + " won!";
    return { stop };
  };

  //displays text declaring a tie
  const tie = () => {
    stopHeadDisplay = true;
    Dheading.textContent = "It's a tie!";
  };

  //put all the markers in an array if certain three index equal the currentPlayer
  //marker then we have a winner if not than empty the array before function ends

  const checkForWinner = () => {
    let array = new Array();
    let playerMarker = player.getCurrentPlayer().marker;
    console.log(playerMarker);

    //puts all current markers on board in array
    for (let i = 0; i < 9; i++) {
      let allMarkers = document.querySelector(`[data-id="${i}"]`);
      let holdCurrentMarker = allMarkers.innerText;
      console.log(holdCurrentMarker);

      array.push(holdCurrentMarker);
      console.log(array);
    }

    //checks array for patterns that indicate a winner, tie, or to keep playing
    if (
      array[0] === playerMarker &&
      array[1] === playerMarker &&
      array[2] === playerMarker
    ) {
      win();
    } else if (
      array[3] === playerMarker &&
      array[4] === playerMarker &&
      array[5] === playerMarker
    ) {
      win();
    } else if (
      array[6] === playerMarker &&
      array[7] === playerMarker &&
      array[8] === playerMarker
    ) {
      win();
    } else if (
      array[0] === playerMarker &&
      array[3] === playerMarker &&
      array[6] === playerMarker
    ) {
      win();
    } else if (
      array[1] === playerMarker &&
      array[4] === playerMarker &&
      array[7] === playerMarker
    ) {
      win();
    } else if (
      array[2] === playerMarker &&
      array[5] === playerMarker &&
      array[8] === playerMarker
    ) {
      win();
    } else if (
      array[0] === playerMarker &&
      array[4] === playerMarker &&
      array[8] === playerMarker
    ) {
      win();
    } else if (
      array[2] === playerMarker &&
      array[4] === playerMarker &&
      array[6] === playerMarker
    ) {
      win();
    } else if (array.every((element) => element !== "")) {
      tie();
    } else {
      array = [];
    }
  };

  //visually sets marker on board
  const setMarker = (x) => {
    let markerPosition = document.querySelector(`[data-id="${x}"]`);
    console.log(markerPosition);
    markerPosition.textContent = player.getCurrentPlayer().marker;
    if (markerPosition.textContent == "X") {
      markerPosition.classList.add("greenBG");
    } else {
      markerPosition.classList.add("purpBG");
    }
  };

  //switches players turn
  const switchTurn = () => {
    let doWeSwitch = player.getCurrentPlayer().marker === "X";
    let switcharoo = doWeSwitch ? true : false;
    player.changeCurrentPlayer(switcharoo);
  };

  //chnages players turn heading to plyrs color
  const TurnColor = () => {
    let curPlrColr = document.querySelector(".displayHeadings");
    if (player.getCurrentPlayer().marker === "O") {
      curPlrColr.classList.remove("green");
    } else if (player.getCurrentPlayer().marker === "X") {
      curPlrColr.classList.add("green");
    }
    return;
  };
  /*get the turns back in order after the reset button has been pressed
  when reset is hit the current player gets switched to x 
*/
  //gets dataset ID being used to refrence location of cell on board
  const getDataID = (e) => {
    let dataID = e.target.dataset.id;
    console.log(dataID);
    return dataID;
  };

  //removes markers from board and empties array that tracks if there is a winner
  function restart() {
    rBtn.addEventListener("click", () => {
      const cells = document.querySelectorAll(".cell");
      let turnDisClr = document.querySelector(".displayHeadings");
      console.log(cells);
      for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
        cells[i].classList.remove("greenBG", "purpBG");
        turnDisClr.classList.add("green");
        takenArray.length = 0;
        resetNamesNTurn();
      }
    });
  }

  const playRound = () => {
    boardElement.addEventListener("click", (e) => {
      let markerLocation = getDataID(e);

      if (takenArray.includes(markerLocation)) {
        //if dataID is in array the spot it refrences is taken, exits out
        return;
      } else {
        takenArray.push(markerLocation);

        setMarker(markerLocation);
      }

      checkForWinner();

      switchTurn();
      if (stopHeadDisplay == false) {
        SwitchNameDisplayed();
      } else {
        stopHeadDisplay = false;
        return;
      }
      TurnColor();
    });
  };
  startButton();
  submitButton();
  cpDisplay();

  playRound();
  restart();
};

//initiates the game
boardControl();

/*customize shit
fisrt add a cool greeting before the you press start to put names in
    

 */
