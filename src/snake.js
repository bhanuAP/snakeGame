const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function(growthFactor) {
    for (var i = 0; i < growthFactor; i++) {
      this.body.unshift(new Position(Infinity,Infinity,this.direction));
    }
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  turnUp:function() {
    this.head=this.head.turnUp();
  },
  turnDown:function() {
    this.head=this.head.turnDown();
  },
  getLength: function() {
    return this.body.length;
  },
  hasSnakeEatenItself: function() {
    let head = this.head;
    return this.body.some(function(pos) {
      return pos.isSameCoordAs(head);
    });
  },
  outOfArea: function(rows,cols) {
    let x = this.head.x;
    let y = this.head.y;
    return x < 0 || x > cols - 1 || y < 0 || y > rows - 1;
  }
}
