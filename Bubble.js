
class Bubble {

  constructor(x, y, diameter) {
    this.xPos = x;
    this.yPos = y;
    this.diameter = diameter;
    this.ran = random(0, 10);
    this.brightness = 0;
  }

  show() {
    fill(this.brightness);
    stroke(random(255), random(255), random(255));
    strokeWeight(3);
    ellipse(this.xPos, this.yPos, this.diameter);
  }

  move() {

    if(this.yPos < 0) {
        this.yPos = 0;
    }

    this.xPos += random(-5, 5);
    this.yPos += random(-5, 5);

    //this.yPos -= 0.7;
  }

  changeColor(brightness) {
    this.brightness = brightness;
  }

  intersect(other) {
    let d = this.dist(this.xPos, this.yPos, other.xPos, other.yPos);
    let radi = (this.diameter + other.diameter)/2;
    return (d < radi * radi);
  }

  hover(x, y) {

    let dis = this.dist(this.xPos, this.yPos, x, y);
    let radi = this.diameter /2 ;
    if(dis < radi * radi) {
      return true;
    } else {
      return false;
    }
  }

  dist(x1, y1, x2, y2) {
    return ((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1));
  }

}
