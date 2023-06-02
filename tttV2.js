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
  const displayText = document.querySelector(".displayHeadings");
  const board = gameBoard();
  const playingBoard = board.getBoard();
  const displayTextNShit = () => {};

  const displayBoard = () => {
    playingBoard.forEach((cell, index) => {
      let button = document.createElement("button");
      button.classList.add("cell");
      button.dataset.id = index;
      domBoard.appendChild(button);
    });

    const scoreBoard = () => {};
  };

  return { displayBoard };
};

const display = displaying();
display.displayBoard();

//player logic
const players = () => {
  let playerOne = {
    name: "",
    marker: "X",
  };
  let playerTwo = {
    name: "",
    marker: "O",
  };

  let currentPLayer = playerOne;

  const changeCurrentPlayer = (newCurrentPLayer) => {
    if (newCurrentPLayer) {
      currentPLayer = playerTwo;
    } else {
      currentPLayer = playerOne;
    }
  };

  const getCurrentPlayer = () => currentPLayer;

  return { getCurrentPlayer, changeCurrentPlayer };
};

//controls needed to make the game function (no pun intended)
const boardControl = () => {
  //const displayGrid = displaying();
  const boardElement = document.querySelector(".board");
  const player = players();

  const getBoard = () => actualBoard;

  const reset = () => {};

  const namePrompt = () => {};

  const start = () => {
    const sButton = document.querySelector(".start");
    sButton.addEventListener("click");
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
      console.log("winner");
    } else if (
      array[3] === playerMarker &&
      array[4] === playerMarker &&
      array[5] === playerMarker
    ) {
      console.log("winner2");
    } else if (
      array[6] === playerMarker &&
      array[7] === playerMarker &&
      array[8] === playerMarker
    ) {
      console.log("winner3");
    } else if (
      array[0] === playerMarker &&
      array[3] === playerMarker &&
      array[6] === playerMarker
    ) {
      console.log("winner4");
    } else if (
      array[1] === playerMarker &&
      array[4] === playerMarker &&
      array[7] === playerMarker
    ) {
      console.log("winner5");
    } else if (
      array[2] === playerMarker &&
      array[5] === playerMarker &&
      array[8] === playerMarker
    ) {
      console.log("winner6");
    } else if (
      array[0] === playerMarker &&
      array[4] === playerMarker &&
      array[8] === playerMarker
    ) {
      console.log("winner7");
    } else if (
      array[2] === playerMarker &&
      array[4] === playerMarker &&
      array[6] === playerMarker
    ) {
      console.log("winner8");
    } else if (array.every((element) => element !== "")) {
      console.log("its a tie");
    } else {
      array = [];
    }
  };

  //visually sets marker on board
  const setMarker = (x) => {
    let markerPosition = document.querySelector(`[data-id="${x}"]`);
    console.log(markerPosition);
    markerPosition.textContent = player.getCurrentPlayer().marker;
  };

  //switches players turn
  const switchTurn = () => {
    let doWeSwitch = player.getCurrentPlayer().marker === "X";
    let switcharoo = doWeSwitch ? true : false;
    player.changeCurrentPlayer(switcharoo);
  };

  //gets dataset ID being used to refrence location of cell on board
  const getDataID = (e) => {
    let dataID = e.target.dataset.id;
    console.log(dataID);
    return dataID;
  };

  //plays a single round of tik tac toe
  const playRound = () => {
    let takenArray = [];
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
    });
  };

  playRound();
};

//initiates the game
boardControl();

//setting listenre on start when clicked the player name form will pop up
//after they hit submit it they will disapear and the game will start
