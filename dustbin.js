 class Dustbin {
    constructor(x,y,height,width) {
        var options = {
          isStatic:true
        
        };
      this.image=loadImage("dustbingreen.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  //rectMode(CENTER);5
  //fill("red");
  imageMode(CENTER);
  image(this.image);
  image(this.image,200, 660, this.width, this.height);
  //rect(pos.x, pos.y, this.width, this.height);
}
 }