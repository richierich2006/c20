var car,wall;
var speed,weight,deformation;
function setup(){
  createCanvas(1500,400);
  car = createSprite(50,200,50,50);
  car.shapeColor = "white";

  wall=createSprite(1480,200,30,400);
  wall.shapeColor="brown";

  speed = random(55,90);
  weight = random(400,1500);
}
function draw(){
  background("black");
  car.velocityX=speed;
  deformation = (0.5*weight*speed*speed)/22500;
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    if(deformation<100){
      car.shapeColor="green"
    }
    if(deformation>100&&deformation<180){
      car.shapeColor="yellow";

    }
    if(deformation>180){
      car.shapeColor="red";
    }
  }
  drawSprites();
}