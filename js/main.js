'use strict'


//  EMPTY = '👣';
// const  = '🦊';

var isShown;
var gBoard;

function initGame() {
    gBoard = buildBoard();
    renderBoard(gBoard);
}

//add Difficulty(i and j)
function buildBoard() {
    var Board = [];
    for (var i = 0; i < 4; i++) {
        Board[i] = [];
        for (var j = 0; j < 4; j++) {
            var cell = { type: 'EMPTY', neighbors: 0, isShown: false };
            //30% is boom/ add var to function Difficulty
            if (Math.random() > 0.7) {
                cell = { type: 'BOOM', isShown: true };
            }
            Board[i][j] = cell;
        }
    }
    // 1 pic === 1000 word
    console.table(Board);
    return Board;
}

function renderBoard() {
    var strHTML = '';
   
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < gBoard[0].length; j++) {
            var cell = gBoard[i][j];
            var className = ''
            if (cell.isShown === false ) className = 'not-shown'
            else{
                className = 'shown'
            }
            strHTML += `<td class="cell ${className}" 
            onclick="userClick(this, ${i}, ${j})" >
            </td>`
        }
        strHTML += `</tr>`
    }
    var elBoard = document.querySelector('.board-body');
    elBoard.innerHTML = strHTML;
}
//fix this
function userClick(elcell, i, j) {
    console.log(elcell,i,j)
    newBoard = runGeneration(gBoard)
    //  console.log(gBoard)
    // renderBoard(gBoard);
}

function runGeneration(board) {
    // var newBoard = copyMat(board);
    var newBoard = copyMat(board);
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            var numOfNeighbors = setMinesNegsCount(i, j, board);
            if (newBoard[i][j].type !== 'EMPTY') return
            if (numOfNeighbors > 0) newBoard[i][j].neighbors = numOfNeighbors
        }
    }
    return newBoard
}

 function setMinesNegsCount(cellI, cellJ, board) {
                    var countNegs = 0;
                    for (var i = cellI - 1; i <= cellI + 1; i++) {
                        if (i < 0 || i >= board.length) continue;
                        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
                            if (i === cellI && j === cellJ) continue;
                            if (j < 0 || j >= board[i].length) continue;
                            if (board[i][j].isShown === true) countNegs++;

                        }
                    }
                    console.log(countNegs,'countNegs')
                    return countNegs;
                }









