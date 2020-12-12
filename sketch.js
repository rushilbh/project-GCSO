var wall,speed,car,weight;


function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
car = createSprite(50,200,30,30);
wall = createSprite(200,200,20);

}

function draw() {
  background(255,255,255); 
 
  

speed = random(55,90);
weight = random(400,1800);

car.velocityX = speed;



if (wall.x - car.x <  (car.width+wall.width)/2 ){

  car .velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;

  if (deformation>180){

    car.shapeColor = color(255,0,0);
  }

  if (deformation<180 && deformation>100){

car.shapeColor = color(230,230,0);

  }

  if (deformation <100){

    car.shapeColor = (0,255,0);
  }
}
  drawSprites();
}