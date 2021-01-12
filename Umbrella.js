class Umbrella {
    constructor(x, y) {

        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true

        }
        //this.r=r;
      
        this.body = Bodies.circle(x, y, 5,options);
        this.body.isSensor="false";       
       Matter.World.add(world,this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("rgb(10,186,181)");
        ellipseMode(RADIUS);
        ellipse(0, 0, 20,20);
        pop();
    }

};