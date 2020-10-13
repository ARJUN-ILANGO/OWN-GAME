const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var player1Img,player2Img,player3Img,player4Img;
var bg;
var bot1,bot2,bot3,bot4;
var hulk,enemy;
var bullet,bulletImg;
var gun;
var players;
var player1, player2, player3, player4;


//database
var playerCount;

//GAMESTATE
var menu = 2;
var START = 1;
var cha = 7;
var SERVE = 3;
var INFO = 4;
var INFO2 = 5;
var PLAY = 6;
var END =0;
var gameState = START;

function preload(){

  //player1Img.loadAnimation("images/man1.png","images/man2.png","images/man3.png","images/man4.png","images/man5.png","images/man6.png");
  //player2Img.loadAnimation("images/man1.png","images/man2.png","images/man3.png","images/man4.png","images/man5.png","images/man6.png");
  ///player3Img.loadAnimation("images/man1.png","images/man2.png","images/man3.png","images/man4.png","images/man5.png","images/man6.png");
  //player4Img.loadAnimation("images/man1.png","images/man2.png","images/man3.png","images/man4.png","images/man5.png","images/man6.png");

 // bg.loadImage("images/bg.png");

  //bulletImg.loadImage("images/bullet_2.png");




}

function setup(){
  createCanvas(displayWidth,displayHeight);

  bot1 = new Bots(displayWidth+200,displayHeight+20,50,50);
  bot1.setCollider("rectangle",10,100);

  
  

//groups
var enemyGroup = createGroup();
var springGroup = createGroup();
var scoreDisplay = createGroup();
var info = createGroup();
var menu1 = createGroup();
var diaGroup = createGroup();
var GunshotGroup = createGroup();


//ground
var ground = createSprite(200,385,400,20);
ground.x = ground.width /2;
ground.shapeColor="green";

//invisibleLine
var line2 =createSprite(200,375,400,2);
line2.shapeColor="red";
line2.visible=false;

//bullet
bullet = createSprite(200,300,50,10)
bullet.x = 2;

gun= createSprite()

//time
var time = 0 ;
var gold=0;
var silver=0;
var bronce=0;
var total = 0;
var life = 0;
var diamond = 0;

var shake = 0;
   

}

function draw(){

  background(bg)

if(gameState==="PLAY"){
   bot1.velocityX = random(1,5);

   
    
   if(bot1.isTouching(player1)|| bot1.isTouching(player2)){
     bullet.velocityX = -30
   }
   
  
}

}

function spawnGunshot(){
  
  if(keyDown("up_arrow")){
    
    bullet=createSprite(player.x+10,player.y-35,10,10);
    bullet.addImage(bulletImg);
    bullet.scale = 0.05;
    bullet.velocityY=-10;
    bullet.lifetime=150;
    GunshotGroup.add(bullet);
  
    
  }
}