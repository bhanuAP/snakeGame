const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "ArrowLeft":
      game.turnSnakeLeft();
      break;
    case "ArrowRight":
      game.turnSnakeRight();
      break;
    case "ArrowUp":
      game.turnSnakeUp();
      break;
    case "ArrowDown":
      game.turnSnakeDown();
      break;
    // case "keyC":
    //   game.grow();
    //   break;
    default:
  }
}

const moveup = function() {
  game.turnSnakeUp();
  return;
}

const movedown = function() {
  game.turnSnakeDown();
  return;
}

const moveleft = function() {
  game.turnSnakeLeft();
  return;
}

const moveright = function() {
  game.turnSnakeRight();
  return;
}
