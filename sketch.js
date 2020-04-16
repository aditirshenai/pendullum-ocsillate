const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var ball2,ball3 ;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var holder_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

holder = Bodies.rectangle(200,100,200,20,holder_options);
World.add(world,holder);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);


ball2  = Bodies.circle(180,200,40,ball_options);
World.add(world,ball2);


ball3  = Bodies.circle(260,200,40,ball_options);
World.add(world,ball3);


var options = {
  bodyA : ball,ball2,ball3,
  bodyB : holder,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("WHite");

var string2 = Constraint.create(options);
World.add(world,string2);

fill("WHite");

var string3 = Constraint.create(options);
World.add(world,string3);

fill("WHite");

}


function draw() {
  background(0); 
  Engine.update(engine);


  text("Press space bar to oscillate the pendulam to left and right with mouse",10,20);
  text("Press Enter to stop the Pendulum from oscillating",100,50);

  fill ("brown");
rectMode(CENTER);
rect(holder.position.x,holder.position.y,200,20);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("blue");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(8);
stroke("white");
line(ball.position.x,ball.position.y,holder.position.x,holder.position.y)




if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;

}

if(keyCode===32){
  ball2.position.y = mouseY;
  ball2.position.x = mouseX;
  }
  
  else if (keyCode === ENTER){
  ball2.position.x = 200;
  
  }

  if(keyCode===32){
    ball3.position.y = mouseY;
    ball3.position.x = mouseX;
    }
    
    else if (keyCode === ENTER){
    ball3.position.x = 200;
    
    }

}








