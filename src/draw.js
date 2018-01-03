const drawGrids=function(numberOfRows,numberOfCols) {
  let grid=document.getElementById("grid");
  for (var i = 0; i < numberOfRows; i++) {
    let row=document.createElement("tr");
    for (var j = 0; j < numberOfCols; j++) {
      let col=document.createElement("td");
      col.id=`${j}_${i}`;
      row.appendChild(col);
    }
    grid.appendChild(row);
  }
}

const paintCell=function(pos,color) {
  let cell=document.getElementById(pos.getCoord().join("_"));
  if(cell) cell.className=color;
}

const paintBody=function(pos) {
  paintCell(pos,"snake");
}

const paintHead=function(pos) {
  paintCell(pos,"snake_head");
}

const unpaintSnake=function(pos) {
  paintCell(pos,"");
}

const drawSnake=function(snake) {
  snake.getBody().forEach(function(pos){
    paintBody(pos);
  });
  paintHead(snake.getHead());
}

const drawFood=function(food) {
  if(food.isSuperFood())
    paintCell(food.getPosition(),"super-food");
  else
  paintCell(food.getPosition(),"food");
}

const hideGameResetDetails = function() {
  document.getElementById('resetDetails').style.visibility = "hidden";
  return;
}

const showGameResetDetails = function() {
  document.getElementById('resetDetails').style.visibility = "visible";
  return;
}

const displayUpdatedScore = function(score) {
  document.getElementById('score').innerText = score;
  return;
}
