const Game=function(topLeft,bottomRight,numberOfRows,numberOfCols) {
  this.topLeft=topLeft;
  this.bottomRight=bottomRight;
  this.numberOfRows=numberOfRows;
  this.numberOfCols = numberOfCols;
  this.snake={};
  this.food={};
}

Game.prototype.addSnake=function(snake) {
  this.snake=snake;
}

Game.prototype.getSnake=function() {
  return snake;
}

Game.prototype.turnSnakeLeft=function() {
  return this.snake.turnLeft();
}

Game.prototype.turnSnakeRight=function() {
  return this.snake.turnRight();
}

Game.prototype.turnSnakeUp=function() {
  return this.snake.turnUp();
}

Game.prototype.turnSnakeDown=function() {
  return this.snake.turnDown();
}

Game.prototype.grow=function() {
  let growthFactor=this.food.getGrowthFactor();
  // console.log(growthFactor);
  return this.snake.grow(growthFactor);
}

Game.prototype.getFood=function() {
  return this.food;
}

Game.prototype.move=function() {
  let details={};
  details.oldHead=this.snake.getHead();
  details.oldTail=this.snake.move();
  details.head=this.snake.getHead();
  return details;
}

Game.prototype.hasSnakeEatenFood=function() {
  return this.snake.head.isSameCoordAs(this.food.getPosition());
}

Game.prototype.createFood=function() {
  // console.log(this.bottomRight);
  let position=generateRandomPosition(this.bottomRight.x,this.bottomRight.y);
  let random=generateRandomNumberBetween(0,10);
  let growthFactor=1;
  let superFood=false;
  if(random>5) {
    growthFactor=10;
    superFood=true;
  }
  this.food=new Food(position,growthFactor,superFood);
}

Game.prototype.updateScore = function(score) {
  document.getElementById('score').innerText = score;
  return;
}

Game.prototype.hasLost = function() {
  let snakeHitWall = snake.outOfArea(numberOfRows,numberOfCols);
  let snakeEatenItSelf = snake.hasSnakeEatenItself();
  return snakeHitWall || snakeEatenItSelf;
}

Game.prototype.isSnakeOutOfArea=function() {
  return snake.outOfArea(numberOfRows,numberOfCols);
}

Game.prototype.hideResetDetails = function() {
  document.getElementById('resetDetails').style.visibility = "hidden";
  return;
}

Game.prototype.showResetDetails = function() {
  document.getElementById('resetDetails').style.visibility = "visible";
  return;
}
