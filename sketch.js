const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;

var block1,block2,block3,block4,block5,block6,block7,block8;

var polygon;

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20)

 block1 = new Box (330,235,30,40)
 block2 = new Box (360,235,30,40)
 block3 = new Box (390,235,30,40)
 block4 = new Box (420,235,30,40)
 block5 = new Box (450,235,30,40)
 block6 = new Box (360,235,30,40)
 block7 = new Box (390,195,30,40)
 block8 = new Box (420,195,30,40)
 block9 = new Box (390,155,30,40)

 ground = new Ground(600,900,1200,20)

 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon);

 slingshot = new Slingshot(this.polygon,{x:100,y:200});
 imageMode(CENTER)
 image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    slingshot.display();
     
    polygon.display();
}
function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}
function keyPressed(){
if(keycode===32)
sling.attach(this.polygon);
}