//check check
//functions (board, controling, players, displaying)

const gameBoard = () => {
  let board = ["x", "x", "x", "", "", "", "", "", ""];

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
    for (emtypCell of playingBoard) {
      let button = document.createElement("button");
      button.classList.add("cell");
      domBoard.appendChild(button);
    }
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

  const getCurrentPlayer = () => currentPLayer;

};

const boardControl = () => {
    const displayGrid = displaying();
    const board. 
  const reset = () => {};

  const checkForWinner = () => {};

  const setMaker = () => {
    currentPLayer.marker 
  };

  const switchTurn = () => {};

  const addListener = () => {
    
    const listenerGrid = displayGrid.displayBoard();
    listenerGrid.addListener("click",setMarker )

  }

  
};
//figuring out how to set the marker in the correct spot