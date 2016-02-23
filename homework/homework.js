/*
  Homework
*/


var ball1X = 101;
var speed1 = 5;

var color1 = "white"
var color2 = "black"

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background("white");
  fill(color2);
  ellipse(ball1X, height/2, 200,200);


  ball1X = ball1X + speed1;



  if(ball1X >= windowWidth-100){
    speed1 = speed1*-1;
  }
  if(ball1X <= 100){
    speed1 = speed1*-1;
  }


  if(mouseIsPressed){
    background("black");
    fill(color1);
    ellipse(width/2, ball1X, 200,200);
  }
}
