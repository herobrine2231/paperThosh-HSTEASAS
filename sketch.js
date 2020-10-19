
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var paperthrash;
var ground1;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1= new ground(width/2,670,width,20);
	dustbin1= new dustbin(1200,650);
	paperthrash= new paper(200,450,70);

	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1600,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
	Render.run(render);
  
	
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ground1.display();
  dustbin1.display();
 paperthrash.display();
 //keyPressed();
 

 // drawSprites();
 
}

function keyPressed()
{
	if (keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(paperthrash.body, paperthrash.body.position,{x:130,y:-145});
	}
}



