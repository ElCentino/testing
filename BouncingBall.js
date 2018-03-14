
var w, h;

var Ball = {

  x : 0,
  y : 0,
  dx : 1,
  dy : 1,
  direction : 1,
  diameter : 60,
  speed : 2
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  w = width;
  h = height;

  Ball.x = 400;
  Ball.y = 600;
}


function display() {
  stroke(255);
  fill(0, 255, 0);
  ellipse(Ball.x, Ball.y, Ball.diameter, Ball.diameter);
}

function draw() {
  background(0);
  display();

  animateBall();
}

function animateBall() {

  Ball.x = Ball.x + Ball.dx * Ball.speed;
  Ball.y = Ball.y + Ball.dy * Ball.speed;

  var x = Ball.x;
  var y = Ball.y;

  if(x < 0 + Ball.diameter || x > w - Ball.diameter) {
    Ball.dx *= -1;
    if(Ball.speed < 150) {
      Ball.speed += 0.01
    }
  } else if(y < 0 + Ball.diameter || y > h - Ball.diameter) {
    Ball.dy *= -1;
    if(Ball.speed < 150) {
      Ball.speed += 0.01
    }
  } else {
    console.log(floor(Ball.speed));
  }
}
