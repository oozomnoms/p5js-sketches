var r = 255;
var b = 255;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(220);
  r = map (mouseX, mouseY, 600, 0, 255);
  background (r,0,b);

   fill(255,0,0);
  stroke(255,20,147)
  strokeWeight(10)
  textSize (300);
   text ("K",mouseX,mouseY);
  
}