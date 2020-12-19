Bodies=Matter.Bodies;
Engine=Matter.Engine;
World=Matter.World;
Constraint=Matter.Constraint;

var engine,world, ball,box1,box2,box3,box4,box5,box6,box7,box8,box9,
box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;
var num;

function setup() {
  createCanvas(1500, 500);

  engine=Engine.create();
  world=engine.world;

  ground=new Ground(750,400,1500,20,{isStatic:true});
  ground2=new Ground(1200,200,20,400,{isStatic:true});

  //1

   
    
  box1=new Box(600,365);
  box2=new Box(640,365);
  box3=new Box(680,365);
  box4=new Box(720,365);
  box5=new Box(560,365);
  box6=new Box(520,365);
  box7=new Box(480,365);
  //2
  
  box8=new Box(620,325);
  box9=new Box(660,325);
  box10=new Box(700,325);
  box11=new Box(580,325);
  box12=new Box(540,325);
  //3
  
  box13=new Box(660,285);
  box14=new Box(620,285);
  box15=new Box(700,285);
  //4
  
  box16=new Box(700,245);

  //1
 
  box1r=new Box(1000,350);
  box2r=new Box(1040,350);
  box3r=new Box(1080,350);
  box4r=new Box(960,350);
  box5r=new Box(940,350);
  box6r=new Box(1120,350);
  box7r=new Box(900,350);
  //2
  box8r=new Box(1000,300);
  box9r=new Box(1040,300);
  box10r=new Box(1080,300);
  box11r=new Box(960,300);
  box12r=new Box(920,300);
  //3
  box13r=new Box(1000,250);
  box14r=new Box(1040,250);
  box15r=new Box(960,250);
  //4
  box16r=new Box(1000,200);
  
  ball=new Ball(500,-100);

  rope=new Rope(ball,{x:400,y:-100});
  

 
  

}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  ground2.display();
  rope.display();

  num=Math.round(random(1,3));

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("lightgreen");
  

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("lightpurple");

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  box1r.display();
  box2r.display();
  box3r.display();
  box4r.display();
  box5r.display();
  box6r.display();
  box7r.display();

  fill("lightyellow")

  box8r.display();
  box9r.display();
  box10r.display();
  box11r.display();
  box12r.display();

  fill("lightblue")

  box13r.display();
  box14r.display();
  box15r.display();

  box16r.display();
   
  ball.display();

  console.log(box1.body.speed);

  text(mouseX+" "+mouseY,mouseX,mouseY);

  

    
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}