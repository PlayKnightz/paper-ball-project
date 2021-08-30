const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundObj,leftSide,rightSide;
var world;
var radius = 70;
var dustbin,paper;


function preload(){

	dustbinImg = loadImage("dustbin.png");
	paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:true,
		restitution:0.3,
		density:0.4
	}

	ball = Bodies.circle(260,100,radius/2,ball_options);
	
	World.add(world,ball);

	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);

	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);
	
	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();

	

	imageMode(CENTER);
	image(paperImg,ball.position.x,ball.position.y,radius/2,radius/2);
	ellipse(ball.position.x,ball.position.y,radius,radius);
	image(paperImg,ball.position.x,ball.position.y,radius,radius);
	
	
   imageMode(TOP);
   image(dustbinImg,1185,600,170,170);
   rect(1185,600,170,170);
   image(dustbinImg,1185,600,170,170);
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:80,y:-50});
	  Matter.Body.setStatic( ball , false);
	}
}
