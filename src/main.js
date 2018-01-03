let game=undefined;
let food=undefined;
let numberOfRows=60;
let numberOfCols=120;

let animator=undefined;

const updateGameStatus = function() {
  let score = (snake.getLength() - 1)*10;
  displayUpdatedScore(score);
  game.grow();
  game.createFood();
  drawFood(game.getFood());
}

const finishGame = function() {
  clearInterval(animator);
  setTimeout(function(){
    showGameResetDetails();
  },300);
}

const animateSnake=function() {
  let details=game.move();
  if(game.hasSnakeEatenFood()) {
    updateGameStatus();
  }
  if(!game.hasLost()) {
    paintBody(details.oldHead);
    unpaintSnake(details.oldTail);
    paintHead(details.head);
    return;
  }
  finishGame();
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const createSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();

  snake=new Snake(head,body);
  game.addSnake(snake);
}

const createFood=function(numberOfRows,numberOfCols) {
  food=generateRandomPosition(numberOfCols,numberOfRows);
}

const createGame=function() {
  let topLeft=new Position(0,0,"east");
  let bottomRight=new Position(numberOfCols,numberOfRows,"east");
  game=new Game(topLeft,bottomRight,numberOfRows,numberOfCols);
}

const startGame=function() {
  createGame();
  hideGameResetDetails();
  createSnake();
  drawGrids(numberOfRows,numberOfCols);
  drawSnake(game.getSnake());
  game.createFood();
  drawFood(game.getFood());
  addKeyListener();
  animator=setInterval(animateSnake,140);
}

window.onload=startGame;
