function setup() {
  createCanvas(1000, 1000);
  background(220);
}

function draw() {
  fill(0, 90);
  stroke(10,0,147)
   strokeWeight(10)
  textSize (300);
    text ("K",  mouseX, mouseY);
}
function mousePressed(){
  background(175,0,50);
 
}