function setup() {
    createCanvas(1000, 1000);
    background(220);
  }
  
  function draw() {
    fill(255,140,0);
    stroke(220,220,220)
     strokeWeight(10)
    textSize (250);
       text ("K",mouseX, mouseY);
  }
  function mousePressed(){
    background(75,0,130);
  }