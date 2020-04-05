const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var ground1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,390,20,200);
    box2 = new Box(175,200,260,40);
    box3 = new Box(250,300,50,100);
    box4 = new Box(100,300,50,100);
    box5 = new Box(20,300,20,200);
    box6 = new Box(200,340,40,40);

    ground1 = new Ground(200,395,400,10)
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

   ground1.display();
}