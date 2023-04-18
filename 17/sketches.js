var x = 0;
var speed = 3;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  textSize (250);
       text ("K",x, 200, 100);
  

  if (x > width) {
    speed = -3;
  }

  x = x + speed;
}