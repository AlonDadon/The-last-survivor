'use strict'

const FLAG = '🌳';
const WOLF = '🐺'

/// can the update if in click function to spzipic win or lose 
//fix when lose game
var gGame = {
    isOn: false,
    gisFristClick: true,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0,
    gLife: 3,
}
var gBoard;

function initGame() {
    gBoard = buildBoard(8);
    printMat(gBoard, '.board-body');
    createWolf(gBoard)
    gGame.isOn = true;
}

function buildBoard(sizeNum) {
    var cell = {
        isShown: false,
        isMine: false,
        isMarked: false,
    }
    var size = sizeNum;
    var board = [];
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            board[i][j] = cell;
        }
    }
    console.table(board)
    return board;
}
//CRATE WOLF
var gCell = []
function createWolf(board) {
    var cell = {
        isShown: false,
        isMine: true,
        isMarked: false,
        location: {
            i: getRandomInt(0, board.length),
            j: getRandomInt(0, board.length)
        },
    }
    gCell.push(cell)
    board[cell.location.i][cell.location.j] = cell
}

function cellClicked(elCell, i, j) {
    // if(!gGame.isOn === true)return
    if (elCell.innerText === WOLF) return
    if (gGame.isOn = false) return

    if (gGame.gisFristClick) {
        gameTimer()
        gGame.gisFristClick = false
    }
    var posI = elCell.dataset.i
    var posJ = elCell.dataset.j
    var pos = {
        i: +posI,
        j: +posJ
    }
    gBoard[i][j].isShown = true
    var NegsCount = setMinesNegsCount(gBoard, pos)
    if (!gBoard[i][j].isMine) {
        renderCell(pos, NegsCount)
        gGame.shownCount++
        if (gGame.shownCount >= gBoard.length * gBoard.length / 2) {
            checkGameOver()
        }

    } else {
        renderCell(pos, WOLF)
        play()
        gGame.gLife--
        
        gGame.shownCount++
        console.log(gGame.gLife)
        if (gGame.gLife === 0) {
            checkGameOver()
        }
    }
    //    //to add more count with 0 itrs bonus after
    //    if(negsCount !== 0){
    //    }
}
function setMinesNegsCount(board, position) {
    var count = 0
    for (var i = position.i - 1; i <= position.i + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = position.j - 1; j <= position.j + 1; j++) {
            if (j < 0 || j >= board[i].length) continue;
            if (i === position.i && j === position.j) continue;
            if (gBoard[i][j].isMine === true) {
                count++
            }
        }
    }
    return count
}
//right click
function cellMarked(elCell, i, j) {
    if (elCell.innerText !== '') return
    if (gGame.isOn = false) { return }
    if (elCell.innerText === FLAG) {
        gGame.markedCount--;
        gBoard[i][j].isMarked = false;
        elCell.innerText = '';
    } else {
        gGame.markedCount++;
        gBoard[i][j].isMarked = true;
        elCell.innerText = FLAG;
    }
    var elCellMarked = document.querySelector('.cell-mark')
    elCellMarked.innerText = gGame.markedCount

}


function play() {
    var audio = new Audio('sound/1.mp3');
    audio.play();
}
document.addEventListener('contextmenu', event => event.preventDefault());