class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;


      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      

      if(this.body.speed < 3){
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width, this.height);
      }
      else{
        push();
         this.Visiblity = this.Visiblity-5;
          World.remove(world,this.body);
        pop();
      }

      
    }
}