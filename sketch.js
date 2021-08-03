var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf;
var appleImg,leafImg;
var select_sprites;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leafImg   = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

select_sprites = Math.round(random(1,2));
console.log(select_sprites);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  if(rabbit.x<40){
    rabbit.x = 40;
  }
  if(rabbit.x>360){
    rabbit.x = 360;
  }
  if(select_sprites == 1){
    createApples();
  }
  else{
    createLeaves();
  }

  drawSprites();
}

function createApples() {
  if(frameCount%80 == 0){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.075;
  apple.velocityY = 4;
  apple.lifetime = 58;
  apple.depth = rabbit.depth
  rabbit.depth = rabbit.depth + 1
  }
}
function createLeaves(){
  if(frameCount%80 == 0){ 
  leaf = createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg);
  leaf.scale = 0.075;
  leaf.velocityY = 4;
  leaf.lifetime = 58;
  leaf.depth = rabbit.depth
  rabbit.depth = rabbit.depth + 1
}
}