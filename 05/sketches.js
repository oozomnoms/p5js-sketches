let x, y, r, g, b;

function setup() {
  createCanvas(1000, 1000);
  background(0,0,255);
}

function draw() {
 r = random (0,255);
 g = 0;
 b = random (0,255);
 x = random (0,800);
 y = random (0,700);

  
   fill(255,165,0,30);
  noStroke()
 textSize (300);
   text ("K",x,y);
  
}
  