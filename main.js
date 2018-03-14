
let bubbles = [];

let count = 1;

let triangleIndex = 0;
let triangleCount = 1;

let triangles = [];

let breaker = false;
let currentBubble;
let trianglePairs = 1;

let trans = [];

let deg = 0;

function setup() {
  
  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i < 200; i++) {
    var x = i * 100 + 100;
    bubbles[i] = new Bubble(random(width), random(height), 20);
  }


  triangles[0] = bubbles[0];
}

function draw() {

  background(0);

  for(let j = 0; j < bubbles.length; j++) {
    for(let i = 0; i < bubbles.length; i++) {
      if(bubbles[j] == bubbles[i] && i % j == 0) {
        continue;
      }
      if(bubbles[j].intersect(bubbles[i])) {
        bubbles[j].changeColor(200, 0, 100);
      }
    }
  }

  translate(0, 0);

  for(var i = 0; i < bubbles.length; i++) {
    bubbles[i].show();
    bubbles[i].move();
  }

  for(let bubble of bubbles) {
    if(bubble.hover(mouseX, mouseY)) {
      bubble.changeColor(255);
      break;
    } else {
      bubble.changeColor(0);
    }
  }

  triangulate();


  //
  // if(triangleCount % 3 == 0 && triangleCount != 0) {
  //
  //   trans[triangleIndex] = new TriangleManager();
  //   trans[triangleIndex].add(triangles);
  //   trans[triangleIndex].draw();
  //
  //   for(let x = 0; x < trans[triangleIndex].triangles.length; x++) {
  //     for(let y = 0; y < trans[triangleIndex].triangles.length; y++) {
  //       line(trans[triangleIndex].triangles[x].xPos, trans[triangleIndex].triangles[x].yPos, trans[triangleIndex].triangles[y].xPos, trans[triangleIndex].triangles[y].yPos);
  //     }
  //   }
  //
  //   //trans[triangleIndex].list();
  //
  //  console.log(trans.length);
  // }
}

function triangulate() {
  if(count > 1) {
    for(let x = 0; x < bubbles.length; x++) {
      for(let y = 0; y < bubbles.length; y++) {
        line(bubbles[x].xPos, bubbles[x].yPos, bubbles[y].xPos, bubbles[y].yPos);
      }
    }
  }
}

function mousePressed() {

  currentBubble = new Bubble(mouseX, mouseY, random(10, 140));
  bubbles.push(currentBubble);

  // triangles[trianglePairs] = currentBubble;
  //
  // if(trianglePairs > 2) {
  //   trianglePairs = 0;
  // }
  //
  // trianglePairs++;
  //
   count++;
  // triangleCount++;
  //
  // if(triangleCount % 3 == 0 && triangleCount != 0) {
  //   triangleIndex++;
  // }
}

// function TriangleManager() {
//
//   this.count = 0;
//   this.triangles = [];
//
//   this.add = function(bubble) {
//     this.triangles[this.count] = bubbles;
//     this.count++;
//   };
//
//   this.draw = function() {
//
//     for(let i = 0; i < this.triangles.length; i++) {
//       // this.triangles[i].show();
//       // this.triangles[i].move();
//
//       console.log(this.triangles[i]);
//     }
//   }
//
//   this.list = function() {
//
//     for(let tran in this.triangles) {
//       console.log(this.triangles);
//     }
//   };
// }

//
// let balls = [];
// let platform = [];
// let yPos = [];
//
// let positions = {{34, 23, 45, 23}, {34, 34, 2, 23}};
//
// let timer = 0;
// let base = 0;
//
// let x = 200;
//
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//
//   for(let i = 0; i < 20; i++) {
//     balls[i] = new Ball(random(100, windowWidth), random(100, windowHeight - 100), random(30, 50), 2);
//   }
//
//   for(let i = 0; i < 5; i++) {
//     yPos[i] = random(0, height - 100);
//   }
// }
//
// function draw() {
//
//   background(255);
//
//   timer += 1 * 0.01;
//
//   console.log(floor(timer));
//
//   if(Math.floor(timer) % 2 == 0) {
//
//   }
//
//   for(let i = 0; i < 5; i++) {
//
//
//     platform[i] = new Platform(x--, yPos[i], 120, 50);
//     platform[i].show();
//
//     base++;
//
//   }
//
//
//   for(let i = 0; i < 1; i++) {
//     balls[i].show();
//     balls[i].move();
//     balls[i].collision(platform);
//   }
//
//   if(keyPressed) {
//
//     var randomIndex = floor(random(0, balls.length - 1));
//
//     if(keyCode === LEFT_ARROW) {
//       balls[randomIndex].xPos--;
//     } else if(keyCode === RIGHT_ARROW) {
//       balls[randomIndex].xPos++;
//     }
//   }
//
//   //console.log(ball.xPos, " ", ball.yPos, " ", ball.damping);
// }
//
// function keyPressed() {
//
//
//   console.log(keyCode);
// }
//
//
//
//
//
//
//



















// let balls = [];
//
// function setup() {
//
//   createCanvas(windowWidth, windowHeight);
//
//   balls[0] = new Ball(390, 60, 70, 10);
//   balls[1] = new Ball(190, 123, 65, 10);
//   balls[2] = new Ball(90, 123, 90, 20);
// }
//
// function draw() {
//
//   background(0);
//
//   for(var i = 0; i < balls.length; i++) {
//     balls[i].show();
//     balls[i].move();
//
//     for(var j = 0; j < balls.length; j++) {
//       balls[i].checkCollision(balls[j]);
//     }
//   }
// }
