const Engine = Matter.Engine;

const World = Matter.World;

const Body = Matter.Body;

const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;

var ground1, BlockBlue1, BlockBlue2, BlockBlue3, BlockBlue4, BlockBlue5, BlockBlue7;

var BlockPink1, BlockPink2, BlockPink3, BlockPink4, BlockPink5, BlockPink6, BlockPink7;

var BlockBlue8, BlockBlue9, BlockBlue10, BlockBlue11, BlockBlue12, BlockBlue13, BlockBlue14;

var polygon1;

var ground2;

function setup() {

  createCanvas(800, 400);

  engine = Engine.create();

  world = engine.world

  ground1 = new Ground(260, 200, 200, 20);

  ground2 = new Ground(600,150,150,20);

  // Ground 1 pyramid
  
  //first level 
  BlockBlue1 = new Box(200, 182, 20, 20);

  BlockBlue2 = new Box(220, 182, 20, 20);

  BlockBlue3 = new Box(240, 182, 20, 20);

  BlockBlue4 = new Box(260, 182, 20, 20);

  BlockBlue5 = new Box(280, 182, 20, 20);

  BlockBlue6 = new Box(300, 182, 20, 20);

  BlockBlue7 = new Box(320, 182, 20, 20);

  //second level
  

  BlockPink2 = new BoxPink(220, 162, 20, 20);

  BlockPink3 = new BoxPink(240, 162, 20, 20);

  BlockPink4 = new BoxPink(260, 162, 20, 20);

  BlockPink5 = new BoxPink(280, 162, 20, 20);

  BlockPink6 = new BoxPink(300, 162, 20, 20);

 

  //third level


  BlockBlue10 = new Box(240, 142, 20, 20);

  BlockBlue11 = new Box(260, 142, 20, 20);

  BlockBlue12 = new Box(280, 142, 20, 20);

 
  // Ground 2 pyramid
  
  
  //first level 
  Block2Blue1 = new Box(560, 132, 20, 20);

  Block2Blue2 = new Box(580, 132, 20, 20);

  Block2Blue3 = new Box(600, 132, 20, 20);

  Block2Blue4 = new Box(620, 132, 20, 20);

  Block2Blue5 = new Box(640, 132, 20, 20);

  //second level

  Block2Pink1 = new BoxPink(580, 112, 20, 20);

  Block2Pink2 = new BoxPink(600, 112, 20, 20);

  Block2Pink3 = new BoxPink(620, 112, 20, 20);

 //thrid level
 Block2Blue6 = new Box(600, 92, 20, 20);



  polygon_1 = new poly(110, 100, 25, 25);

  sling = new SlingShot(polygon_1.body, { x: 110, y: 100 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();
  ground2.display();

  Block2Blue1.display();
  Block2Blue2.display();
  Block2Blue3.display();
  Block2Blue4.display();
  Block2Blue5.display();
  
  Block2Pink1.display();
  Block2Pink2.display();
  Block2Pink3.display();

  Block2Blue6.display();
  
  // Ground 1 pyramid
  BlockBlue1.display();

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue7.display();



  BlockPink2.display ();

  BlockPink3.display ();

  BlockPink4.display ();

  BlockPink5.display ();

  BlockPink6.display ();

  BlockBlue10.display();

  BlockBlue11.display();

  BlockBlue12.display();

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

