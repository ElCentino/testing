
var scl = 60;
var row;
var col;

function setup() {

  createCanvas(600, 400, WEBGL);
  row = width / 2;
  col = height / 2;

  background(0);
}

function draw() {

  background(0);
  stroke(255);
  //noFill();

  for(var x = 0; x < row; x++) {
    for(var y = 0; y < col; y++) {
      var rand = random(1, 7);
      if(rand > 2) {
        fill(40, 12, 90);
      } else {
        noFill();
      }
      rect(x * scl, y * scl, scl, scl);
    }
  }
}
