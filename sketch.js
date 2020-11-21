var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
wall=createSprite(1500, 200, 60 , height/2);
car=createSprite(50, 200, 50, 50);
car.velocityX=speed;
car.shapeColor="white";
wall.shapeColor="cyan";
}


function draw() {
  background(0);  
if(wall.x-car.x<car.width/2+wall.width/2)
{
  car.velocityX=0;
  var defor=0.5*weight*speed*speed/22500;
  if(defor>180)
  {
    car.shapeColor="red";
  }
  if(defor<180 && defor>100)
  {
    car.shapeColor="orange";
  }
  if(defor<100){
    car.shapeColor="green";
  }
}

  drawSprites();
}