let rectSize;

function setup() {
  createCanvas(1000, 1000);
  background(0,160,0);
  rectSize = random (50, 100)
}

function draw() {
  fill(128,0,0,10);
  noStroke()
  textSize (200);
   text ("K",mouseX,mouseY);

}