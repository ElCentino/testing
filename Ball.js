
class Ball {

  constructor(x, y, diameter, speed) {
    this.xPos = x;
    this.yPos = y;
    this.diameter = diameter;

    this.xDirection = 1;
    this.yDirection = 1;
    this.speed = speed;
    this.damping = 0.05;
    this.gravity = random(0.1, 0.6);
    this.energy = 1;

    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  show() {
    strokeWeight(2);
    stroke(0);
    fill(this.r, this.g, this.b);
    ellipse(this.xPos, this.yPos, this.diameter, this.diameter);
  }

  move() {
    //this.xPos += 1 * this.xDirection * this.speed;
    if(this.energy > 0) {
      this.yPos += this.energy * this.yDirection * this.damping;
    }

    this.damping += this.gravity * this.yDirection;

    this.checkBounds();

    //console.log(this.damping);
  }

  checkBounds() {

    if(this.xPos < 0 + this.diameter || this.xPos > windowWidth - this.diameter) {
      this.xDirection *= -1;
    }

    if(this.yPos > windowHeight - this.diameter) {
      this.yDirection *= - 1;

      //this.energy -= 0.05;
    }
  }

  checkCollision(ball) {

    var dist = this.dist(ball.xPos, ball.yPos, this.xPos, this.yPos);

    if(dist < this.diameter * ball.diameter) {
      this.xDirection *= -1;
      this.yDirection *= -1;
      ball.xDirection *= -1;
      ball.yDirection *= -1;

      return true;
    }
  }

  collision(platform){
    var dist = this.dist(platform.xPos, platform.yPos, this.xPos, this.yPos);

    if(dist < this.diameter * (platform.width)) {
      this.yDirection *= -1;
    }
  }

  dist(x1, y1, x2, y2) {
    return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
  }
}
