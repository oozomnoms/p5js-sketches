function setup() {
    createCanvas(1000, 1000);
    background(220);
    background(0);
  }
  
  function draw() {
   if (mouseIsPressed){
  fill(0,90,0,15);
    stroke(0,0,147,5)
     strokeWeight(7)
     textSize (250);
     text ("K",mouseX, 200, 80);
   } else{
      background(175,0,0);
  fill(mouseY);
    noStroke();
     textSize (250);
     text ("K",mouseX, 200, 80);
  
  }
  }