var man, coins;
var obstaclesGroup,coinsGroup;
var score = 0;




function preload(){

  backgroundImage = loadImage("download.jpg");
  groundImage = loadImage("grass.jpg")
  coinImage = loadImage("download2.png")


}



function setup(){ 
createCanvas(1000,600);

  bG = createSprite(500,200);
  bG.addImage(backgroundImage);
  bG.scale = 6;
  bG.velocityX = -3;
 


  man = createSprite(200,140,30,80);
  man.shapeColor = "red"

  obstaclesGroup = new Group();
  coinsGroup = new Group();
   
}


function draw(){ 
  background(180);
  
  if(keyIsDown(UP_ARROW)){
    man.y -= 3
  }
  
  if(keyIsDown(DOWN_ARROW)){
    man.y += 4
  }

  if(bG.x > 0){
    bG.x = bG.width/2
  }
  
  if(obstaclesGroup.isTouching(man)){
    //gameState = END;
    background("black");
    coinsGroup.destroyEach();
    obstaclesGroup.destroyEach();
    man.destroy();
    
    text("Game Over!",500,300);
    
  }
  
  if(coinsGroup.isTouching(man)){
    score += 5;
  }
  
   spawnObstacles(); 
   drawSprites(); 
  
}
  function spawnObstacles(){
    
    if(frameCount % 60 === 0){ 
      
      obstacles = createSprite(2000, Math.round(random(30,590)),200,30); 
      obstacles.velocityX = -5;
      obstacles.addImage(groundImage);
      obstacles.scale = 0.2
      obstacles.lifetime = 560;
      obstaclesGroup.add(obstacles)

      coins = createSprite(obstacles.x,obstacles.y- 30, 20, 20);
      coins.shapeColor = "blue";
      coins.velocityX = -5
      coins.lifetime = 560;
      coins.addImage(coinImage);
      coins.scale = 0.2
      coinsGroup.add(coins)
    } 
    }

  

