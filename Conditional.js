
var mouseOver = false;
var mousePress = false;

var ballProps = {
  x : 300,
  y : 300,
  borderWidth : 2,
  diameter : 60,
};

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

    background(255);

    rectMode(CENTER);

    strokeWeight(ballProps.borderWidth);

    if(mousePress && mouseOver) {
      fill(255, 0, 0);
    }
    else {
      fill(255, 0, 255);
    }

    if(distSq(ballProps.x , ballProps.y, mouseX, mouseY) < pow((ballProps.diameter/2 + ballProps.borderWidth), 2)) {
      mouseOver = true;
    } else {
      fill(0, 0, 255);
      mouseOver = false;
    }

    ellipse(ballProps.x, ballProps.y, ballProps.diameter, ballProps.diameter);

    Retraction();
}

function Retraction() {

  var currentXPos = ballProps.x;
  var currentYPos = ballProps.y;

  var speed = 0.01;

  if(mousePress) {
    //ballProps.x = lerp(ballProps.x, ballProps.x + 400, speed);
    //ballProps.y = lerp(ballProps.y, ballProps.y + 400, speed);

    //ballProps.x = lerp(ballProps.x, mouseX, speed * 5);
    //ballProps.y = lerp(ballProps.y, mouseY, speed * 5);

    ballProps.x = mouseX;
    ballProps.y = mouseY;
  }

  if(mouseReleased) {
    ballProps.x = lerp(ballProps.x, 20, speed * 1);
    ballProps.y = lerp(ballProps.y, 20, speed * 1);
  }
}

function mousePressed() {

  if(mouseOver) {
    mousePress = true;
  }
}

function mouseReleased() {

  if(mouseOver) {
    mousePress = false;
  }
}

function distSq(x1, y1, x2, y2) {
  return pow((x2 - x1), 2) + pow((y2 - y1), 2);
}
