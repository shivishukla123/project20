
var fixedRect, movingRect;
var gameObject1, gameObject2;
var Rect1,rect2,rect3,rect4;
function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  Rect1=createSprite(200,100,50,50);
  rect2=createSprite(300,100,50,50);
  rect3=createSprite(400,100,50,50);
  rect4=createSprite(500,100,50,50);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,rect4)){
    movingRect.shapeColor = "blue";
    rect4.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    rect4.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}


