let clickCount = 0;
let origBoard;
const playerOne = "O";
const playerTwo = "X";
const winCombos = [
  [a, b, c],
  [d, e, f],
  [g, h, j],
  [a, d, g],
  [b, e, h],
  [c, f, j],
  [a, e, j],
  [c, e, g]
];

const cells = document.querySelectorAll(".cell");
startGame();

function startGame() {
  document.querySelector(".endgame").style.display = "none";
  origBoard = Array.from(Array(9).keys());
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].style.removeProperty("background-color");
    cells[i].addEventListener("click", turnClick, false);
  }
}

//const playerClick = square => {};

function turnClick(square) {
  //turn(square.target.id, playerOne);
  if (
    clickCount === 1 ||
    clickCount === 3 ||
    clickCount === 5 ||
    clickCount === 7 ||
    clickCount === 9
  ) {
    turn(square.target.id, playerOne);
  } else {
    turn(square.target.id, playerTwo);
  }
}

function turn(squareId, player) {
  origBoard[squareId] = player;
  document.getElementById(squareId).innerText = player;
  let gameWon = checkWin(origBoard, player);
  if (gameWon) gameOver(gameWon);
}

function checkWin(board, player) {
  //
  let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), []);
  let gameWon = null;
  for (let [index, win] of winCombos.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = { index: index, player: player };
      break;
    }
  }
  return gameWon;
}

function gameOver(gameWon) {
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == playerOne ? "blue" : "red";
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", turnClick, false);
  }
}

const main = () => {
  document.querySelector(".sandbox").addEventListener("click", () => {
    clickCount++;
    console.log(clickCount);
  });
};

document.addEventListener("DOMContentLoaded", main);
