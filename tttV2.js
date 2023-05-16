//check check
//functions (board, controling, players, displaying)

const gameBoard = () => {
  let board = ["", "", "", "", "", "", "", "", ""];

  const getBoard = () => board;

  return { getBoard };
};

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
  };

  return { displayBoard };
};

const display = displaying();
display.displayBoard();

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

const boardControl = () => {
  const displayGrid = displaying();
  const boardElement = document.querySelector(".board");
  const player = players();

  const getBoard = () => actualBoard;

  const reset = () => {};

  const threeInRow = (button) => {
    if (button.textContent === player.getCurrentPlayer().marker) {
    }
  };

  const checkForWinner = () => {
    let leftToRightTop = document.querySelectorAll(
      "[data-id='0'],[data-id='1'],[data-id='2']"
    );
    const leftToRightMid = document.querySelector(
      "[data-id='0'][data-id='1'][data-id='2']"
    );
    const leftToRightLow = document.querySelector(
      "[data-id='0'][data-id='1'][data-id='2']"
    );
    const upDownLeft = document.querySelector(
      "[data-id='0'][data-id='3'][data-id='6']"
    );
    const upDownMid = document.querySelector(
      "[data-id='1'][data-id='4'][data-id='7']"
    );
    const upDownRight = document.querySelector(
      "[data-id='2'][data-id='5'][data-id='8']"
    );
    const diaLeftToRight = document.querySelector(
      "[data-id='0'][data-id='4'][data-id='8']"
    );
    const diaRightToLeft = document.querySelector(
      "[data-id='2'][data-id='4'][data-id='6']"
    );

    /* leftToRightTop.forEach((button) => {
        if(button.textContent === )
    }); */

    console.log(leftToRightTop.textContent);
  };

  const setMarker = (x) => {
    let markerPosition = document.querySelector(`[data-id="${x}"]`);
    console.log(markerPosition);
    markerPosition.textContent = player.getCurrentPlayer().marker;
  };

  const switchTurn = () => {
    let doWeSwitch = player.getCurrentPlayer().marker === "X";
    let switcharoo = doWeSwitch ? true : false;
    player.changeCurrentPlayer(switcharoo);
  };

  const getDataID = (e) => {
    let dataID = e.target.dataset.id;
    console.log(dataID);
    return dataID;
  };

  const playRound = () => {
    boardElement.addEventListener("click", (e) => {
      console.log(e);
      let startChecking = 1;
      let markerLocation = getDataID(e);
      setMarker(markerLocation);

      checkForWinner();

      switchTurn();
    });
  };

  playRound();
};

boardControl();

//figuring out checkWinner logic
