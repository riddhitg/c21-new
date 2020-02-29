var movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
 createCanvas(1200,800);
 gameObject1= createSprite(100, 100, 50, 50);
 gameObject1.shapeColor="green";
 gameObject2=createSprite(200,100,50,50);
 gameObject2.shapeColor="green";
 gameObject3=createSprite(300,100,50,50);
 gameObject3.shapeColor="green";
 gameObject4=createSprite(400,100,50,50);
 gameObject4.shapeColor="green"
 movingRect=createSprite(400,200,80,30);
 movingRect.shapeColor="red";
 movingRect.debug=true;
}

function draw() {
  background(0);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
 if(isTouching(movingRect,gameObject1)) {
    movingRect.shapeColor="red";
    gameObject1.shapeColor="red";
  }  
  else{
    movingRect.shapeColor="red";
    gameObject1.shapeColor="green";
  }
  if(isTouching(movingRect,gameObject2)) {
    movingRect.shapeColor="red";
    gameObject2.shapeColor="red";
  }  
  else{
    movingRect.shapeColor="red";
    gameObject2.shapeColor="green";
  }
  if(isTouching(movingRect,gameObject3)) {
    movingRect.shapeColor="red";
    gameObject3.shapeColor="red";
  }  
  else{
    movingRect.shapeColor="red";
    gameObject3.shapeColor="green";
  }
  if(isTouching(movingRect,gameObject4)) {
    movingRect.shapeColor="red";
    gameObject4.shapeColor="red";
  }  
  else{
    movingRect.shapeColor="red";
    gameObject4.shapeColor="green";
  }
  drawSprites();
}
