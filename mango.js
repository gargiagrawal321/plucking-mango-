class Mango{
    constructor(x, y, diameter) {
        var options = {
             'isStatic':true,
            'restitution':0.5,
            'friction':1.0,
        }
        this.body = Bodies.circle(x, y, diameter , options);
        this.diameter=diameter;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        image(this.image, 0, 0, this.diameter,this.diameter);
        pop();
      }
}


