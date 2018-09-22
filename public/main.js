let origBoard
const playerOne = "O"
const playerTwo = "X"
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

const cells = document.querySelectorAll(".cell")
startGame()

function startGame() {
  document.querySelector(".endgame").style.display = "none"
  origBoard = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ""
    cells[i].style.removeProperty("background-color")
    cells[i].addEventListener("click", turnClick, false)
  }
}

function turnClick(square) {
  turn(square.target.id, player1)
}

function turn(squareId, player) {
  origBoard[squareId] = player
  document.getElementById(squareId).innerText = player
  let gameWon = checkWin(origBoard, player)
  if (gameWon) gameOver(gameWon)
}

function checkWin(board, player) {
  let plays = board.reduce((a, e, i) => (e === player ? a.concat(i) : a), [])
  let gameWon = null
  for (let [index, win] of winCombos.entries()) {
    if (win.every(elem => plays.indexOf(elem) > -1)) {
      gameWon = { index: index, player: player }
      break
    }
  }
  return gameWon
}

function gameOver(gameWon) {
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
      gameWon.player == player1 ? "blue" : "red"
  }
  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", turnClick, false)
  }
}

const main = () => {}

document.addEventListener("DOMContentLoaded", main)
