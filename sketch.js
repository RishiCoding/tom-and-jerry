
var tom, tom_walking, tomLastImage;
var jerry, jerryAnimation, jerryLastImage;
var garden;
function preload() {
   gardenImage=loadImage("garden.png");
   tom_walking=loadAnimation("tomTwo.png", "tomThree.png");
   jerryAnimation=loadAnimation( "jerryTwo.png", "jerryThree.png");
   tomImage=loadImage("tomOne.png");
   jerryImage=loadImage("jerryOne.png");
   tomLastImage=loadImage("tomFour.png");
   jerryLastImage=loadImage("jerryFour.png")
}

function setup(){
    createCanvas(1000,800);

    garden=createSprite(500, 400, 500, 500);
    garden.addImage(gardenImage);

    tom=createSprite(800, 600, 10, 10);
    tom.addImage(tomImage);
    tom.scale=0.2;

    jerry=createSprite(200, 600, 10, 10);
    jerry.addImage(jerryImage);
    jerry.scale=0.2;

    
}

function draw() {
    background(255);
    keyPressed();
    if(tom.x - jerry.x <= jerry.width/2 + tom.width/2
      &&  tom.y - jerry.y <= tom.height/2 + jerry.height/2
      && jerry.y - tom.y <= jerry.height/2 + tom.height/2){
      tom.velocityX =0;
      tom.addImage(tomLastImage);
      jerry.addImage(jerryLastImage);
    }
    else{
    tom.changeAnimation("cat walking", tom_walking);
    }
    drawSprites();
}


function keyPressed(){
  if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("cat walking", tom_walking);
    tom.changeAnimation("cat walking", tom_walking);

  }
  
}
