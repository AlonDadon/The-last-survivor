'use strict'

function numToCheckVictory(gBoard) {
    var num = gBoard.length * gBoard.length
    return num
}
function countWolfToCheckVictory(Board) {
    var countWolf = 0
    var numOfCell = numToCheckVictory(gBoard)
    console.log(numOfCell)
    if (numOfCell < 17) {
        countWolf = 2
    }
    if (numOfCell > 17) {
        countWolf = 12
    }
    if (numOfCell > 70) {
        countWolf = 30
    }
    console.log(countWolf)
    return countWolf
}

function checkGameOver() {

    var numOfCell = numToCheckVictory(gBoard)
    var countWolf = countWolfToCheckVictory(gBoard)
    
    if (gGame.gLife <= 0) {
        console.log('game-over')
        gGame.isOn = false;
        lose()
        setTimeout(lose,4000)
        setTimeout(startGame,6000)
    }
    if (numOfCell - countWolf === gGame.shownCount && gGame.markedCount === countWolf || numOfCell === gGame.shownCount) {
        console.log('winnnnerrrr')
        gGame.isOn = false;
        //fix convert new game to win
        win()
        setTimeout(win,4000)
        setTimeout(startGame,6000)


    }
}

function newGame() {
    clearTimer()
    gGame.gFirstClick = true;
    gGame.isOn = true
    gGame.shownCount = 0
    gGame.markedCount = 0
    gGame.secsPassed = 0
    gGame.gLife = 3
    initGame()
    // var elButton = document.querySelector('game-over')
}


function win(){
    var x = document.getElementById("win");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    newGame()
  }
    
function lose(){
    var x = document.getElementById("lose");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    newGame()
}

function startGame(){
    var x = document.getElementById("main-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }



}