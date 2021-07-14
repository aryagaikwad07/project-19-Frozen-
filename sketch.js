var elsa ,elsa_running;
var path, pathImage;
var monster1,monsterImg;
var wolf,wolfImg;
var dragon,dragonImg;
var obstaclesGroup,arrowGroup;
var arrow, arrowImage;

var score=0;

var END =0;
var PLAY =1;
var gameState = PLAY;





function preload(){
elsa_running = loadImage("frozen.png");
pathImage = loadImage("ice castle.jpg");
monsterImg = loadImage("m1.png");
wolfImg = loadImage("images.jpg");
dragonImg = loadImage("images (1).jpg");
arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(700,400);
  
// creating path
path = createSprite(190,170,50,50);
path.addImage(pathImage);
path.scale=1.3;
path.velocityX = -5;

elsa = createSprite(100,350,50,50); 
elsa.addImage(elsa_running);
elsa.scale=0.3;

obstaclesGroup = createGroup();

}

function draw() {
  


background("red");
textSize(30);
  fill(305);
  text("Score: "+ score,200,100);
  
  
  if(gameState===PLAY){
    if (path.x < 0){
      path.x = path.width/2;}
      
      elsa.y = World.mouseY;

      edges= createEdgeSprites();
      elsa.collide(edges);

     //creating continous opponent players
     if (keyDown("space")) {
      createArrow();
     }
   
  }

 drawSprites();
 spawnObstacles();

}

function spawnObstacles(){
  if (frameCount % 60 === 0){
    var monster = createSprite(600,350,10,40);
    monster.velocityX = -6
    monster.velocityY = -6
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: monster.addImage(monsterImg);
               break;
       case 2: monster.addImage(wolfImg);
               break;
       case 3: monster.addImage(dragonImg);
               break;
       default: break;
     }
     monster.scale = 0.3;
     monster.lifetime = 300;

     obstaclesGroup.add(monster);
    }

  }
  function createArrow() {
    var arrow= createSprite(100, 100, 60, 10);
    arrow.addImage(arrowImage);
    arrow.x = 360;
    arrow.y=elsa.y;
    arrow.velocityX = 4;
    arrow.lifetime = 300;
    arrow.scale = 0.9;
    //arrowGroup.add(arrow);
  
  }  
  

