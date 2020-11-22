var fixedRect;
var movingRect;
var a,b


function setup() {
  createCanvas(1200,800);
fixedRect = createSprite(400, 100, 50, 80);
movingRect= createSprite(400, 800, 80, 30);
movingRect.shapeColor="green";
fixedRect.shapeColor="green";
movingRect.velocityY= -5;
fixedRect.velocityY= +5;

a = createSprite(800, 100, 50, 80);
b= createSprite(800, 800, 80, 30);
b.velocityY= -5;
a.velocityY= +5;

}

function draw() {
  background("Black");  


  bounceoff(fixedRect,movingRect);
  bounceoff(a,b);



  drawSprites();

}















