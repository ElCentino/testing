
function Platform(x, y, width, height) {

  this.xPos = x;
  this.yPos = y;
  this.width = width;
  this.height = height;

  this.show = function() {
    strokeWeight(2);
    stroke(0);
    fill(255, 0, 0);

    rectMode(CENTER);

    rect(this.xPos, this.yPos, this.width, this.height);
  }
}
