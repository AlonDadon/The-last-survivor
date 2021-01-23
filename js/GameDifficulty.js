'use strict'
function novice() {
    newGame()
    gBoard = buildBoard(4)
    printMat(gBoard, '.board-body');
    for (var i = 0; i < 2; i++) {
        createWolf(gBoard)
    }
  startGame()
}
function Survivor() {
    newGame()
    gBoard = buildBoard(8)
    printMat(gBoard, '.board-body');
    for (var i = 0; i < 12; i++) {
        createWolf(gBoard)
    }
    startGame()
}
function hero() {
    newGame()
    gBoard = buildBoard(12)
    printMat(gBoard, '.board-body');
    for (var i = 0; i < 30; i++) {
        createWolf(gBoard)
    }
    startGame()
}



