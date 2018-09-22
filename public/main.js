let clickCount = 0
let origBoard
const playerOne = { letter: "O", value: 1 }
const playerTwo = { letter: "X", value: -1 }
let playerCount = 0
const winCombos = [
  [a, b, c],
  [d, e, f],
  [g, h, j],
  [a, d, g],
  [b, e, h],
  [c, f, j],
  [a, e, j],
  [c, e, g]
]

const playerOneWinCondition = () => {
  if (origBoard.a === "X" && origBoard.b === "X" && origBoard.c === "X") {
    document.querySelector(".winMessage").textContent = "PLAYER ONE WINS"
  }
  if (origBoard.d === "X" && origBoard.e === "X" && origBoard.f === "X") {
    document.querySelector(".winMessage").textContent = "PLAYER ONE WINS"
  }
  if (origBoard.g === "X" && origBoard.h === "X" && origBoard.j === "X") {
    document.querySelector(".winMessage").textContent = "PLAYER ONE WINS"
  }
  if (origBoard.a === "X" && origBoard.d === "X" && origBoard.g === "X") {
    document.querySelector(".winMessage").textContent = "PLAYER ONE WINS"
  }
  if (origBoard.b === "X" && origBoard.e === "X" && origBoard.h === "X") {
    document.querySelector(".winMessage").textContent = "PLAYER ONE WINS"
  }
  if (origBoard.c === "X" && origBoard.f === "X" && origBoard.j === "X") {
    document.querySelector(".winMessage").textContent = "PLAYER ONE WINS"
  }
  if (origBoard.a === "X" && origBoard.e === "X" && origBoard.j === "X") {
    document.querySelector(".winMessage").textContent = "PLAYER ONE WINS"
  }
  if (origBoard.c === "X" && origBoard.e === "X" && origBoard.g === "X") {
    document.querySelector(".winMessage").textContent = "PLAYER ONE WINS"
  }
  if (origBoard.a === "O" && origBoard.b === "O" && origBoard.c === "O") {
    document.querySelector(".winMessage").textContent = "PLAYER TWO WINS"
  }
  if (origBoard.d === "O" && origBoard.e === "O" && origBoard.f === "O") {
    document.querySelector(".winMessage").textContent = "PLAYER TWO WINS"
  }
  if (origBoard.g === "O" && origBoard.h === "O" && origBoard.j === "O") {
    document.querySelector(".winMessage").textContent = "PLAYER TWO WINS"
  }
  if (origBoard.a === "O" && origBoard.d === "O" && origBoard.g === "O") {
    document.querySelector(".winMessage").textContent = "PLAYER TWO WINS"
  }
  if (origBoard.b === "O" && origBoard.e === "O" && origBoard.h === "O") {
    document.querySelector(".winMessage").textContent = "PLAYER TWO WINS"
  }
  if (origBoard.c === "O" && origBoard.f === "O" && origBoard.j === "O") {
    document.querySelector(".winMessage").textContent = "PLAYER TWO WINS"
  }
  if (origBoard.a === "O" && origBoard.e === "O" && origBoard.j === "O") {
    document.querySelector(".winMessage").textContent = "PLAYER TWO WINS"
  }
  if (origBoard.c === "O" && origBoard.e === "O" && origBoard.g === "O") {
    document.querySelector(".winMessage").textContent = "PLAYER TWO WINS"
  }
}
const cells = document.querySelectorAll(".cell")
startGame()

function startGame() {
  document.querySelector(".endgame").style.display = ""
  origBoard = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ""
    cells[i].style.removeProperty("background-color")
    cells[i].addEventListener("click", turnClick, false)
  }
}

// const playerClick = square => {}

function turnClick(square) {
  // turn(square.target.id, playerOne)
  //   if (
  //     clickCount === 1 ||
  //     clickCount === 3 ||
  //     clickCount === 5 ||
  //     clickCount === 7 ||
  //     clickCount === 9
  //   ) {
  //     turn(square.target.id, playerOne.letter)
  //   } else {
  //     turn(square.target.id, playerTwo.letter)
  //   }
  if (playerCount === 0) {
    turn(square.target.id, playerOne.letter)
    playerCount = 1
  } else {
    turn(square.target.id, playerTwo.letter)
    playerCount = 0
  }
}

const checkWinner = () => {
  playerOneWinCondition()
}

function turn(squareId, player) {
  origBoard[squareId] = player
  document.getElementById(squareId).innerText = player
  //   let gameWon = checkWin(origBoard, player)
  //   if (gameWon) gameOver(gameWon)
  document.getElementById(squareId).removeEventListener("click", turnClick)
  checkWinner()
}

// function checkWin (board, player) {
//   let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), [])
//   let gameWon = null
//   for (let [index, win] of winCombos.entries()) {
//     if (win.every(elem => plays.indexOf(elem) > -1)) {
//       gameWon = { index: index, player: player }
//       break
//     }
//   }
//   return gameWon
// }

// function gameOver (gameWon) {
//   for (let index of winCombos[gameWon.index]) {
//     document.getElementById(index).style.backgroundColor =
//       gameWon.player == playerOne ? 'blue' : 'red'
//   }
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].removeEventListener('click', turnClick, false)
//   }
// }

const main = () => {
  document.querySelector(".sandbox").addEventListener("click", () => {
    clickCount++
    console.log(clickCount)
  })
}

document.addEventListener("DOMContentLoaded", main)
