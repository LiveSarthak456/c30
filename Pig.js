class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity=255;//initally pig is totally visible

  }

// if the pig speed is in some range - then we display it
//else we will remove it from the game

display (){

 if (this.body.speed < 3)
 super.display();
 else {
  World.remove(world,this.body);
  //as we remove the pig, we will reduce its transparency and draw image to give shading/fading effect
  push();
  this.visiblity -= 5;
  tint(255,this.visiblity);
  image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
pop();
 }
}

};