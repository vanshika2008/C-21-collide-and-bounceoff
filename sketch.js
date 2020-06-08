var fixedRect, movingRect;
var gameObject1, gameObject2;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200, 500,80,30);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(800, 500,80,30);
  gameObject2.shapeColor = "green";

  gameObject2.velocityX = -5;
  gameObject1.velocityX = 5;
} 

function draw() {
  background(0,0,0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  /*if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }*/

  if(isTouching(movingRect,gameObject2)){
  movingRect.shapeColor  = "red";
  gameObject2.shapeColor  = "red";
  }else{
    movingRect.shapeColor  = "green";
  gameObject2.shapeColor  = "green";
  }

  bounceOff(gameObject1,gameObject2);
  drawSprites();
}

