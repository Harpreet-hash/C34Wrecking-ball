class Box{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,40,50);                
        this.visibility=255;
        this.image=loadImage("gift1.png");   

        World.add(world,this.body);   


    }
    display(){        
        
        if(this.body.speed>5){
            push();
            World.remove(world,this.body);
            this.visibility-=15;
            tint(255,this.visibility);
            translate(this.body.position.x,this.body.position.y);
            image(this.image,0,0,70,80)
            pop();

        }
        else{
            push();
            imageMode(CENTER);            
            translate(this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            image(this.image,0,0,70,80);
            pop();

        }   
        
    }
}