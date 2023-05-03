let board = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn = 'x';
let winner = 0;

function onClickCell(element) {
  if (board[element.id] === 0 && winner === 0) {
    board[element.id] = turn;
    element.value = turn;
    if (turn == 'x') {
      turn = 'o';
    } else {
      turn = 'x';
    }
    winner = getWinner();
    if (winner) {
      setTimeout(() => {
        alert(winner + ' wins!');
      }, 100);
    } else if (winner === 0 && !board.includes(0)) {
      setTimeout(() => {
        alert('Draw!');
      }, 100);
    }
  }
}

function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    let combo = winningCombos[i];
    if (board[combo[0]] == board[combo[1]] && board[combo[1]] == board[combo[2]] && board[combo[0]] != 0) {
      return board[combo[0]];
    }
  }
  return 0;
}

function resetGame() {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  turn = 'x';
  winner = 0;
  const cells = document.querySelectorAll('.cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].value = '';
  }
}