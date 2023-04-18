var circleX = 10;
var particles = [];
var n = 500;//number of particle
var noiseScale = 100;//noise scale;
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
         text ("K",x, 200, 100);
    
  
    if (x > width) {
      speed = -3;
    }
  
    x = x + speed;
  }
    
    for(var i=0; i<particles.length; i++){
      var p = particles[i];//pick a particle
      p.pos.add(curl(p.pos.x/noiseScale, p.pos.y/noiseScale));
      point(p.pos.x, p.pos.y);
    }
  
   
  
  function genNoiseImg(){
    noiseImg = createGraphics(width, height);
    noiseImg.loadPixels();
    var widthd = width*pixelDensity();
    var heightd = height*pixelDensity();
    for(var i=0; i<widthd; i++){
      for(var j=0; j<heightd; j++){
        var x = i/pixelDensity();
        var y = j/pixelDensity();
        var bright = pow(noise(x/noiseScale, y/noiseScale)-0.3, 1/2.0)*400;
        noiseImg.pixels[(i+j*widthd)*4] = bright;
        noiseImg.pixels[(i+j*widthd)*4+1] = bright;
        noiseImg.pixels[(i+j*widthd)*4+2] = bright;
        noiseImg.pixels[(i+j*widthd)*4+3] = 255;
      }
    }
    noiseImg.updatePixels();
  }
    