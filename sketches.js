

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  if (mouseIsPressed){
    fill(0);
      stroke(255,20,147)
       strokeWeight(10)
  textSize (400);
  text ("K", mouseX,mouseY);

} else{
  background(0);
fill(255,165,0);
noStroke()
textSize (400);
  text ("K", mouseX,mouseY);
  
}
}