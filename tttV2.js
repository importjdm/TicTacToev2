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
    let checkForWinnerArray = [];
    let markerArray = Array();

    let leftToRightTop = document.querySelectorAll(
      "[data-id='0'],[data-id='1'],[data-id='2']"
    );
    let leftToRightMid = document.querySelectorAll(
      "[data-id='3'],[data-id='4'],[data-id='5']"
    );
    let leftToRightLow = document.querySelectorAll(
      "[data-id='6'],[data-id='7'],[data-id='8']"
    );
    let upDownLeft = document.querySelectorAll(
      "[data-id='0'],[data-id='3'],[data-id='6']"
    );
    let upDownMid = document.querySelectorAll(
      "[data-id='1'],[data-id='4'],[data-id='7']"
    );
    let upDownRight = document.querySelectorAll(
      "[data-id='2'],[data-id='5'],[data-id='8']"
    );
    let diaLeftToRight = document.querySelectorAll(
      "[data-id='0'],[data-id='4'],[data-id='8']"
    );
    let diaRightToLeft = document.querySelectorAll(
      "[data-id='2'],[data-id='4'],[data-id='6']"
    );

    /*console.log(leftToRightTop);
    console.log(leftToRightMid);*/
    checkForWinnerArray.push(
      leftToRightTop,
      leftToRightMid,
      leftToRightLow,
      upDownLeft,
      upDownMid,
      upDownRight,
      diaLeftToRight,
      diaRightToLeft
    );
    console.log(checkForWinnerArray);
    
    //get eveything into array slice every 3 indexes represents a winner. 
    //9 arrays of possible ways to win if any has all 3 of the currentplayr marker
    //they win
    
    checkForWinnerArray.forEach((nList) => {
      nList.forEach((button) => {
        markerArray.push(button.innerText);
      });
      for(let i = 2; i < markerArray.length; i + 3){
        let array + i = arkerArray.splice(0, i)
      }
      console.log(markerArray);
    });

    
    //puts the nodeist in a array
    /* console.log(leftToRightTop);
    Array.from(leftToRightTop, (buttonText) => {
      checkForWinnerArray.push(buttonText.innerText);
    });
    
    //check array for three in a row 
    const letsCheckArray = () =>{
        for(let i = 0; i < 2; i++){
            if(checkForWinnerArray[i] === player.getCurrentPlayer().marker){

            }
            console.log(player.getCurrentPlayer().name + "is the winner");
        }
    } */
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
