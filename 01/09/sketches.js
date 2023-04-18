function setup() {
  createCanvas(1000, 1000);
  background(220);
  background(0);
}

function draw() {
 if (mouseIsPressed){
fill(0,90,0,15);
  stroke(0,0,147,5)
   strokeWeight(15)
  textSize (500);
   text ("K",mouseX,mouseY);
 } else{
    background(175,0,0);
fill(mouseY);
  noStroke()
  textSize (500);
   text ("K",mouseX,mouseY);
 }

}