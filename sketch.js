var astronaut;
var bg, iss;
var bath, brush, drink, eat, gym1, gym2, move, sleep;

var topEdge, bottomEdge, rightEdge, leftEdge;

function preload(){
  bg = loadImage("iss.png");
  bath = loadAnimation("bath1.png", "bath2.png");
  brush = loadAnimation("brush.png", );
  drink = loadAnimation("drink1.png", "drink2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  gym1 = loadAnimation("gym1.png", "gym2.png");
  gym2 = loadAnimation("gym11.png", "gym12.png");
  move = loadAnimation("move.png", "move.png", "move1.png", "move1.png");
  sleep = loadAnimation("sleep.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage("bg", bg);
  iss.scale = 0.2;

  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(255,255,255);  

  if(keyDown("up")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing", brush);
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("down")){
    astronaut.addAnimation("gymming", gym1);
    astronaut.changeAnimation("gymming", gym1);
    astronaut.y = 320;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("left")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating", eat);
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("right")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking", drink);
    astronaut.y = 350;
    astronaut.velocityY = 0;
    astronaut.velocityX = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityY = 0.2;
    astronaut.velocityX = 1;
  }

  createEdgeSprites();
  drawSprites();
}

function createEdgeSprites(){
  astronaut.bounceOff(topEdge, bottomEdge, rightEdge, leftEdge);

  topEdge = createSprite(width/2, 400, 800, 1);
  topEdge.visible = false;

  bottomEdge = createSprite(width/2, 0, 800, 1);
  bottomEdge.visible = false;

  rightEdge = createSprite(800, height/2, 1, 400);
  rightEdge.visible = false;
  
  leftEdge = createSprite(0, height/2, 1, 400);
  leftEdge.visible = false;
}