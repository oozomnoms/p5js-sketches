var circleX = 10;
var particles = [];
var n = 500;//number of particle
var noiseScale = 100;//noise scale;
var speed = 3;
function setup() {
    createCanvas(1000, 1000);
     background(5);
    noiseDetail(1, 0);
    console.log(pixelDensity());
    //generate noise image
    genNoiseImg();
    image(noiseImg, 0, 0);
    
    //initialize particle
    for(var i=0; i<n; i++){
      var particle = new Object();
      
      particle.pos = createVector(random(width), random(height));
      particles.push(particle);//add particle to particle list
    }
  }
  
  
  //get gradient vector
  function curl(x, y){
    var EPSILON = 0.001;//sampling interval
    //Find rate of change in X direction
    var n1 = noise(x + EPSILON, y);
    var n2 = noise(x - EPSILON, y);
    //Average to find approximate derivative
    var cx = (n1 - n2)/(2 * EPSILON);
  
    //Find rate of change in Y direction
    n1 = noise(x, y + EPSILON);
    n2 = noise(x, y - EPSILON);
  
    //Average to find approximate derivative
    var cy = (n1 - n2)/(2 * EPSILON);
    
    //return new createVector(cx, cy);//gradient toward higher position
    return new createVector(cy, -cx);//rotate 90deg
  
  }
  
  function draw() {
    // background
    background(199,21,133,5);
     tint(255, 4);
    image(noiseImg, 0, 0);//fill with transparent noise image
    //fill(0, 4);
    //rect(0, 0, width, height);
    

    stroke(255);
    strokeWeight(4);
    noFill();
    textSize (250);
     text ("K",circleX, 200, 100);
    
  circleX = circleX + speed;
    if (circleX > width) {
      speed = -3;
    }
  
}