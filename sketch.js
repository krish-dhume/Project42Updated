var issImage, spacebgImage, spacecraftImage, spacecraftImage2, spacecraftImage3, spacecraftImage4;
var iss, spacecraft;
var hasDocked = false;
var gameState=1;
var PLAY=1;
var END=0;
function preload() {
  issImage = loadImage("iss.png");
  spacebgImage = loadImage("spacebg.jpg")
  spacecraftImage = loadImage("spacecraft1.png")
  spacecraftImage2 = loadImage("spacecraft2.png")
  spacecraftImage3 = loadImage("spacecraft3.png")
  spacecraftImage4 = loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(displayWidth, displayHeight);

  iss = createSprite(displayHeight - 60, 200, 20, 20);
  iss.addImage(issImage);
  iss.scale = 1;

  spacecraft = createSprite(displayHeight - 80, 480, 20, 20)
  spacecraft.addImage(spacecraftImage);
  spacecraft.scale = 0.3;


}


function draw() {
  background(spacebgImage);

  if (!hasDocked) {
    spacecraft.x = Math.round(random(displayHeight-49,displayHeight-50))

  
    if(keyDown(UP_ARROW)){
      spacecraft.addImage(spacecraftImage)
  spacecraft.y= spacecraft.y-2;
  
    }
    if(keyDown(DOWN_ARROW)){
      spacecraft.addImage(spacecraftImage2)
  spacecraft.y= spacecraft.y+2;
  
    } 
  
     if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraftImage4)
      spacecraft.x=displayHeight-30;
       
        }
        if(keyDown(LEFT_ARROW)){
          spacecraft.addImage(spacecraftImage3)
      spacecraft.x=displayHeight-80 ;
        }
      
  

      }

 if(keyDown(UP_ARROW)&&spacecraft.y-iss.y===80){
  gameState=END;

  
 }
  if(gameState==END){
    textSize(24);
    fill("white")
    text("Docking Successfull!",500,displayHeight-300)
    spacecraft.velocityX=0;
    spacecraft.velocityY=0;
    spacecraft.x=displayHeight - 80;
    spacecraft.y=280;
    spacecraft.addImage(spacecraftImage);
  }
  
  console.log(spacecraft.y)

  drawSprites();
}