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

var gBoard = buildBoard(4, 4);

function initGame() {
    //play on load VVV
    // gBoard = buildBoard(4,4);
    renderBoard(gBoard);
}

// ex.1
// Builds the board
// Set mines at random locations
// Call setMinesNegsCount()
// Return the created board
// setMinesNegsCount(board) Count mines around each cel

function buildBoard(sizeI, sizeJ) {
    //1
    var Board = [];
    for (var i = 0; i < sizeI; i++) {
        Board[i] = [];
        for (var j = 0; j < sizeJ; j++) {
            var cell = { type: 'EMPTY', neighbors: 0, isShown: false, isMarked: false };
            //30% is boom/ add var to function Difficulty
            if (Math.random() > 0.7) {
                cell = { type: 'BOOM', isShown: false, isMarked: false };
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
            onclick="cellClicked(this, ${i}, ${j})" >
            </td>`
        }
        strHTML += `</tr>`
    }
    var elBoard = document.querySelector('.board-body');
    elBoard.innerHTML = strHTML;
}

function cellClicked(elCell, i, J) {
    var posI = elCell.dataset.i
    var posJ = elCell.dataset.j
    var pos = {
        i: +posI,
        j: +posJ
    }
   var NegsCount = setMinesNegsCount(gBoard, pos)
    renderCell(pos.i,pos.j,NegsCount)
console.log('NegsCount',NegsCount)

//tomrow ---add or remove class to hide and show

}

function renderCell(i, j, value) {
    var elCell = document.querySelector(`[data-i="${i}"][data-j="${j}"]`);
    elCell.innerText = value;
}

function setMinesNegsCount(board, position) {
    var count = 0
    for (var i = position.i - 1; i <= position.i + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = position.j - 1; j <= position.j + 1; j++) {
            if (j < 0 || j >= board[i].length) continue;
            if (i === position.i && j === position.j) continue;
            if (board[i][j].type === 'BOOM') {
                count++
        
            }
        }
    }
    console.log(count)
    return count
}

function cellMarked(elCell) {
    // Called on right click to mark a
    // cell (suspected to be a mine)
    // Search the web (and
    // implement) how to hide the
    // context menu on right click
    //add this to rightclick

    // elCell.classList.toggle('flag');
    //     if (gElSelectedSeat) {
    //         gElSelectedSeat.classList.remove('flag');
    //     }

}

function checkGameOver() {
    // Game ends when all mines are
    // marked, and all the other cells
    // are shown

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
