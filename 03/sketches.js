
    var r = 255;
var b = 255;

function setup() {
  createCanvas(800, 700);
  background (255);
}

function draw() {
    if (mouseIsPressed){
  r = map (mouseX, mouseY, 100, 0, 255);
   fill(255,0,0, 90);
  stroke(0,0,255)
  strokeWeight(10)
  textSize (500);
  text ("K", mouseX,mouseY);

    } else {
        background(255);
      fill(139,0,139);
      noStroke()
      textSize (500);
        text ("K", mouseX,mouseY);
       }
    
}


 
  