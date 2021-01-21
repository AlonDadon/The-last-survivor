'use strict'


// const EMPTY = '👣';
// const EMPTY = ' ';
// const BOOM = '🦊';
// const FLAG = '👀'
// var gBoard = {
//  minesAroundCount: 0,
//  isShown: true,
//  isMine: false,
//  isMarked: true
// }
//glevl=board size 4*4
var gLevel = {
    SIZE: 4,
    MINES: 2
};
// this is update button game
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var fristTrun;
var gisShown;
var gElSelected = false
var gLife = 3
var gBoard;
var gGetDifficultyBoom = 2
var gCountBoomIsMarked = gGetDifficultyBoom


function initGame() {
    //play on load VVV
    gBoard = buildBoard(4, 4,gGetDifficultyBoom);
    renderBoard(gBoard);
    gisShown = gBoard.length * gBoard.length
    console.log(gisShown, 'is swon')
}

// ex.1
// Builds the board
// Set mines at random locations
// Call setMinesNegsCount()
// Return the created board
// setMinesNegsCount(board) Count mines around each cel

function buildBoard(sizeI, sizeJ,Difficulty) {
    //1
    var countBoom = 0
    var Board = [];
    for (var i = 0; i < sizeI; i++) {
        Board[i] = [];
        for (var j = 0; j < sizeJ; j++) {
            var cell = { type: 'EMPTY', neighbors: 0, isShown: false, isMarked: false };
            //30% is boom/ add var to function Difficulty
            if (Math.random() > 0.5) {
                cell = { type: 'BOOM', isShown: false, isMarked: false };
                countBoom += 1
            
            }
            if (countBoom > Difficulty) {
                cell = { type: 'EMPTY', neighbors: 0, isShown: false, isMarked: false };
            }
            Board[i][j] = cell;
        }
    }
    // 1 pic === 1000 word
    console.table(Board);
    return Board;
}


function renderBoard(board) {
    // Render the board as a <table>
    // to the page
    var strHTML = '';
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < gBoard[0].length; j++) {
            var cell = gBoard[i][j];

            var classNameShown = ''
            var classNameType = ''

            if (cell.isShown === false) classNameShown = 'not-shown'
            else {
                classNameShown = 'shown'
            }

            if (cell.type === 'BOOM') {
                classNameType = 'boom';
            }
            else {
                classNameType = 'empty'
            }

            strHTML += `<td class="cell ${classNameShown}-${classNameType} " 
            data-i="${i}" data-j="${j}"
            onclick="cellClicked(this, ${i}, ${j})"
             oncontextmenu="cellMarked(this,${i},${j})" >
            </td>`
        }
        strHTML += `</tr>`
    }
    var elBoard = document.querySelector('.board-body');
    elBoard.innerHTML = strHTML;
}

function cellClicked(elCell, i, j) {
    if (gBoard[i][j].isMarked) return
    if (gBoard[i][j].isShown) return
    else {
        gBoard[i][j].isShown = true
        gisShown--
        if (gisShown === 0) {
            checkGameOver()
            return
        }
    }

    // update when is boom
    var gameover = gBoard[i][j]

    if (gameover.type === 'BOOM') {
        console.log(' gameover.isShown', gameover.isShown)
        gLife--
        if (gLife === 0) checkGameOver()
        // return
    }
    var posI = elCell.dataset.i
    var posJ = elCell.dataset.j
    var pos = {
        i: +posI,
        j: +posJ
    }
    var NegsCount = setMinesNegsCount(gBoard, pos)
    renderCell(pos.i, pos.j, NegsCount)
    // console.log('NegsCount', NegsCount)
    //tomrow ---add or remove class to hide and show
}

function renderCell(i, j, value) {
    var elCell = document.querySelector(`[data-i="${i}"][data-j="${j}"]`);
    elCell.innerText = value;
    var isEmpty = gBoard[i][j]
    if (isEmpty.type === 'EMPTY') {
        elCell.classList.remove('shown-empty')
        elCell.classList.add('going')
    }
    if (isEmpty.type === 'BOOM') {
        elCell.innerText = '🦊'
    }

}

function setMinesNegsCount(board, position) {
    var count = 0
    for (var i = position.i - 1; i <= position.i + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = position.j - 1; j <= position.j + 1; j++) {
            if (j < 0 || j >= board[i].length) continue;


            if (board[i][j].type === 'BOOM') {
                count++

            }
            if (board[i][j].type === 'EMPTY' && count === 0) {
                setMinesNegsCount(gBoard, board[i][j])

            }
        }
    }

    return count
}

var gIsCellMark;
function cellMarked(elCell, i, j) {
    if (gBoard[i][j].isShown === true) return

    elCell.classList.toggle('flag');
    if (gElSelected) {
        elCell.classList.remove('flag');
    }

    if (!gIsCellMark) {
        gBoard[i][j].isMarked = true
        gIsCellMark = true
        
    } else {
        gBoard[i][j].isMarked = false
        gIsCellMark = false
    }
    return
}

function checkGameOver() {
      if(gLife === 0 || gisShown === 0 ){
        lose()
        return
    }  
    if (gGetDifficultyBoom === gCountBoomIsMarked ){
            if(gisShown - gGetDifficultyBoom === 0){
                console.log('winnnerrr')
                win()
                return
            }
        }
    }
    function win() {

    }

    function lose() {


    }


function getBoard(){

}


function expandShown(board, elCell, i, j) {
    // When user clicks a cell with no
    // mines around, we need to open
    // not only that cell, but also its
    // neighbors.

    // NOTE: start with a basic
    // implementation that only opens
    // the non-mine 1
    // st degree
    // neighbors



    // BONUS: if you have the time
    // later, try to work more like the
    // real algorithm (see description
    // at the Bonuses section below)
}
// function markField(obj) {
//     obj.style.backgroundColor = 'blue';
//     //return false;
// }

//
document.addEventListener('contextmenu', event => event.preventDefault());