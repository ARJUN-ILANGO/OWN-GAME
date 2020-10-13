class Bots extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("images/man1.png");
    }
  

    AI(){
        this.velocityX = -3
    }
}