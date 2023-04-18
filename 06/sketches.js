
function setup() {
  createCanvas(1000, 1000);
  background(220);
  background(0);
}


function draw() {
  if (mouseIsPressed){
 fill(0);
   stroke(255,20,147)
    strokeWeight(7)
   textSize (300);
    text ("K", mouseX, mouseY);
    
  } else{
     background(255,0,175);
 fill(mouseY);
   noStroke()
   textSize (300);
    text ("K",  mouseX, mouseY);
 }
 }