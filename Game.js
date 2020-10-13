class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){

      if(gameState === 0){

        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
  
      player1 = createSprite(100,200);
      player1.addAnimation("player1",player1Img);

      player2 = createSprite(300,200);
      player2.addAnimation("player2",player2Img);

      player3 = createSprite(500,200);
      player3.addAnimation("player3",player3Img);

      player4 = createSprite(700,200);
      player4.addAnimation("player4",player4Img);

      players = [player1, player2, player3, player4];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        
        //index of the array
        var index = 0;
  
        var x = 175 ;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          players[index-1].x = x;
          players[index-1].y = y;
         // console.log(index, player.index)
  
         
          if (index === player.index){
            stroke(10);
            fill("red");
            ellipse(x,y,60,60);
            players[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = players[index-1].y;
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(LEFT_ARROW) && player.index !== null){
       player.x = player.x - 5;
       
      }

      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.x = player.x+ 5;
        
       }
  
  
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      
    }
  }
  