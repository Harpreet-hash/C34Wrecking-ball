class Rope{
    constructor(bodyA,pointB){        

        var options={
            bodyA:bodyA.body,
            pointB:pointB,
            stiffness:0.5,
            length:400
        }
        this.rope=Matter.Constraint.create(options);        
        World.add(world,this.rope);


    }
    display(){

        strokeWeight(5);
        stroke(255);
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y);
        

    }
}