//creating global variables
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivalTime=0;

function preload(){
  
  //loading the images of monkey
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  //loading the images of bananas and obstacles
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
   
createCanvas(400,400);
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("monkeyrunning",monkey_running)
monkey.scale=0.1;

ground  = createSprite(400,350,900,10)
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  survivalTime=0;
}


function draw() {
background(300);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground);
  
  drawSprites();
  
  food();
   obstacles();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
  
}

function food(){
  
  if(frameCount % 80 === 0){
    
    banana = createSprite(400,200,20,20)
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-8;
    banana.lifetime=50;
    
    FoodGroup.add(banana);
   
  }
  
}

function obstacles(){
  
  if(frameCount % 100 === 0){
    
    obstacle = createSprite(300,340,20,20);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -7;
    obstacle.scale=0.1;
    obstacle.lifetime=40;
    
    obstacleGroup.add(obstacle);
  }
  
  
  
  
}




