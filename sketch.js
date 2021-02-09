
var gameState=0;
var form;
var backGround,backGroundImg;
var Title;
var lvlbackground;
var mario;
var mariostand
var ground;
function preload(){
    backGroundImg=loadImage("Mariowallpaper.png")
    Title=loadImage("mariotext.png")
    lvlbackground=loadImage("background.png")
    mariostand=loadAnimation("mariostanding.png")
    mariorun=loadImage("Mariorun.png")
    mariojump=loadImage("Mariojump.png")
    mariorunning=loadAnimation("mariostanding.png","mariostanding.png","Mariorun.png","Mariorun.png")
}
function setup(){
     createCanvas(windowWidth-25,windowHeight-25);
     //backGround=createSprite(windowWidth/2,windowHeight/2,windowWidth-25,windowHeight-25)
     //backGround.addImage("Mariowallpaper.png",backGroundImg)
     database = firebase.database();
     database.ref('Gamestate').on("value",(data)=>{
         gameState=data.val();
     })
      
     form=new Form();
     mario=createSprite(50,height-150,30,30);
     mario.addAnimation("stand",mariostand)
     mario.addAnimation("running",mariorunning)
    
     mario.scale=0.4
     mario.velocityX=3;
     ground=createSprite(windowWidth/2,windowHeight-110,windowWidth,20)
    
}


function draw(){
    
    fill("white")
    textSize(20)
   
    console.log(gameState);
    text("Mario Game",width/2-20,100)
if(gameState==0){
    background(backGroundImg);
    form.display();
}
if(gameState==1){
    ground.display();
     background(lvlbackground)
     camera.position.x=mario.x
     form.hide();
     mario.display();
     if(keyDown("RIGHT_ARROW")){
         mario.x=mario.x+5
         mario.changeAnimation("running",mariorunning)
        
     }
    else{
        mario.changeAnimation("stand",mariostand)
    }
     if(keyDown("LEFT_ARROW")){
        mario.x=mario.x-5
       
    }
    if(keyDown("UP_ARROW")){
        mario.y=mario.y-10
       
    }
    mario.velocityY=mario.velocityY+0.3;
  
   // camera.position.y=displayHeight/2;
}      
     mario.collide(ground)
}

function writeData(state){
    database.ref('/').update({
        "Gamestate":state
    })
}
