class Ball{
    constructor(x,y){
        var options={density:2,restitution:0.5};
        this.body=Bodies.circle(x,y,50,options);
        
        World.add(world,this.body);


    }
    display(){
        
        push();                
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,50,50);
        pop();


    }
}