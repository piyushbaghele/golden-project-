var astronaut_running,astronaut
var scene_image,scene

function preload(){
  //astronaut_running = loadAnimation("running-1.png,running-2.png,running-4.png,running-5.png,running-6.png")  
  scene_Image = loadImage("background-1.png");

}

function setup() {
  createCanvas(1000, 500);

 //astronaut = createSprite(50,160,20,50);
 //astronaut.addAnimation("running",astronaut_running);
 //astronaut.scale = 0.5;
  
  scene = createSprite(100,200,1000,500);
  scene.addImage("background",scene_Image);
  scene.velocitx = 0.5
 
}

function draw() {
  background(0);
  
  if (scene.x < 0){
   scene.x = scene.width/2;
  }

  drawSprites();
}




