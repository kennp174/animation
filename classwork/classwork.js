/*
  Classwork
*/
var ball1X = 26;
var ball2Y =26;
var speed1 = 3;
var speed2 = 3;
var color1 = "white"

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background("white");
  fill(color1);
  ellipse(ball1X, height/2, 50,50);
  ellipse(width/2, ball2Y, 50,50);



  ball1X = ball1X + speed1;
  ball2Y = ball2Y + speed2;


  if(ball1X >= windowWidth-25){
    speed1 = speed1*-1;
  }
  if(ball1X <= 25){
    speed1 = speed1*-1;
  }
  if(ball2Y >= windowHeight-25){
    speed2 = speed2*-1;
  }
  if(ball2Y <= 25){
    speed2 = speed2*-1;
  }

  if(mouseIsPressed){
    color1 = "blue";
  } else {
    color1 = "white"


  }

}
