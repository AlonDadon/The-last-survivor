
function printMat(mat, selector) {
  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j];
      var className = 'cell cell' + i + '-' + j;
      strHTML += `<td class="cell ${className} " 
  data-i="${i}" data-j="${j}"
  onclick="cellClicked(this, ${i}, ${j})"
   oncontextmenu="cellMarked(this,${i},${j})" >
  </td>`
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell${location.i}-${location.j}`);
  elCell.innerHTML = value;
}





function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


function getEmoji(value) {
  var emoji = ''
  for (var i = 0; i < value; i++) {
    emoji += '🌳'
  }
  return emoji
}

function gameTimer() {
  // if(!gGame.isOn)return
  var elTimer = document.querySelector('.timer');
  gTimer = setInterval(function () {
    gGame.secsPassed++;
    elTimer.innerText = + gGame.secsPassed;
  }, 1000)
}

function clearTimer(){
  gGame.secsPassed = 0
  var elTime = document.querySelector('.timer');
  elTime.innerText = '0';
}
//to 
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
