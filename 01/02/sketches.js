var r = 255;
var b = 255;


function setup() {
    createCanvas(800, 700);
    background(220);
    background (r,0,b);
  }
  
  function draw() {
    r = map (mouseX, mouseY, "K");
     fill(0,255,0, 90);
    stroke(200,0,200)
    textSize (400);
    text ("K", mouseX,mouseY);
  
  
  }