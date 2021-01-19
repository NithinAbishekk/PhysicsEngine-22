const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var myEngine,myWorld,myGround;
var ball;

function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld =myEngine.world;

  var options={
    isStatic:true
  }

  myGround = Bodies.rectangle(200,390,200,50,options);
  World.add(myWorld,myGround);

  var ball_options = {
     restitution:1.5
  }
  ball = Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);
 // console.log(myObject);
 // console.log(myObject.type);
  //console.log(myObject.position.x);
  //console.log(myObject.position.y);

 /*  var render = Render.create({
    element: document.body,
    engine: myEngine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(myEngine);
  Render.run(render); */
  
}

function draw() {
  background(0); 
  Engine.update(myEngine); 

  rectMode(CENTER);
  rect(myGround.position.x,myGround.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
}