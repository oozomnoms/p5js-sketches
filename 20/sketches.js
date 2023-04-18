size = 25;
let rez = 0.006;

function setup() {
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
  background(199,21,133);
  stroke(255)
  

        textSize (400);
   text ("K",mouseX,mouseY);
  
  for(x=0;x<width;x+=size+0){
    for (y=0;y<height;y+=size+0){
      n = noise(x*rez,y*rez)-0.1;
      c=random(3);
      //c = n*4; //let noise decide
      if (c<1){
        line(x,y,x+size,y+size)
      }
      else //if (c<2)
      {
        textSize (400);
   text ("K",mouseX,mouseY);
        line(x,y+size,x+size,y)
      }
    }
  textSize (400);
   text ("K",mouseX,mouseY);
}
}