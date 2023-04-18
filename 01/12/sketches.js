// JavaScript Objects
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/beginners/p5js/2.3-objects.html
// https://youtu.be/-e5h4IGKZRY
// https://editor.p5js.org/codingtrain/sketches/6J5VPMbW

// Changed object name after circle became a function in p5js.
size = 25;
let rez = 0.008;
var circle1 = {
  x: 0,
  y: 200,
  diameter: 50
};

var r = 0;
var g = 0;
var b = 221;

function setup() {
  createCanvas(1000, 1000);
   createCanvas(windowWidth-20, windowHeight-70);
  strokeWeight(5);
  
  background(185);
  
  for(x=0;x<width;x+=size+0){
    for (y=0;y<height;y+=size+0){
      n = noise(x*rez,y*rez)-0.2;
      c=random(2);
      //c = n*4; //let noise decide
      if (c<1){
        line(x,y,x+size,y+size)
      }
      else //if (c<2)
      {
        line(x,y+size,x+size,y)
      }
      // else if (c<3){
      //   line(x,y,x,y+size)
      // }
      // else if (c<4){
      //   line(x,y,x+size,y)
      // }
    }
  }  

}

function draw() {
  // background
  background(r, g, b);
  // ellipse
  stroke (255);
  fill(199,21,133);
   textSize (250);
   text ("K",circle1.x, circle1.y);
 

  circle1.x = circle1.x + 1;
   for(x=0;x<width;x+=size+0){
    for (y=0;y<height;y+=size+0){
      n = noise(x*rez,y*rez)-0.2;
      c=random(2);
      //c = n*4; //let noise decide
      if (c<1){
        line(x,y,x+size,y+size)
      }
      else //if (c<2)
      {
        textSize (500);
   text ("K",mouseX,mouseY);
        line(x,y+size,x+size,y)
      }
    }
  textSize (500);
   text ("K",mouseX,mouseY);
}

}