const Engine = Matter.Engine
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body
const Constraint = Matter.Constraint

var ground , miniG, miniG2
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16

var block17,block18,block19,block20,block21,block22,block23,block24,block25
var hexa_image , hexa

var score=0

var chain
var engine,world

function preload() {
    
    hexa_image=loadImage("polygon.png")
}


function setup() {
 createCanvas(800,600)   


engine = Engine.create();
world = engine.world;


ground = new Ground(400,500,1000,20)
miniG = new Ground(635,250,220,20)
miniG2=new Ground(330,450,250,20)

block1=new Block(240,425,30,30)
block2=new Block2(270,425,30,30)
block3=new Block(300,425,30,30) 
block4=new Block2(330,425,30,30)
block5=new Block(360,425,30,30)
block6=new Block2(390,425,30,30)
block7=new Block(420,425,30,30)

block8=new Block(270,395,30,30)
block9=new Block2(300,395,30,30)
block10=new Block(330,395,30,30)
block11=new Block2(360,395,30,30)
block12=new Block(390,395,30,30)

block13=new Block(300,365,30,30)
block14=new Block2(330,365,30,30)
block15=new Block(360,365,30,30)

block16=new Block(330,335,30,30)

block17=new Block(580,225,30,30)
block18=new Block2(610,225,30,30)
block19=new Block(640,235,30,30)
block20=new Block2(670,235,30,30)
block21=new Block(700,235,30,30)

block22=new Block(610,195,30,30)
block23=new Block2(640,195,30,30)
block24=new Block(670,195,30,30)

block25=new Block(640,165,30,30)



hexa=Bodies.circle(50,200,20)
World.add(world,hexa)

chain= new Chain(hexa,{x:150,y:200})

Engine.run(engine);

}

function draw() {
    rectMode(CENTER)
background("grey")
Engine.update(engine)
strokeWeight(2)
stroke("black")
textSize(25)
fill("white")
text("Score:"+ score, width-250,50)

strokeWeight(2)
stroke("black")
textSize(20)
fill("orange")
text("Drag the Hexagonal Stone and Release it , to launch it towards the tower",50,25)

strokeWeight(2)
stroke("black")
textSize(20)
fill("yellow")
text("Press Space Bar to get a second try ",470,489)

strokeWeight(2)
stroke("black")
textSize(20)
fill("red")
text("Have fun 😄😃",0,250)


ground.display()
miniG2.display()
miniG.display()

block1.display()
block1.score()
block2.display()
block2.score()
block3.display()
block3.score()
block4.display()
block4.score()
block5.display()
block5.score()
block6.display()
block6.score()
block7.display()
block7.score()

block8.display()
block8.score()
block9.display()
block9.score()
block10.display()
block10.score()
block11.display()
block11.score()
block12.display()
block12.score()

block13.display()
block13.score()
block14.display()
block14.score()
block15.display()
block15.score()

block16.display()
block16.score()

block17.display()
block17.score()
block18.display()
block18.score()
block19.display()
block19.score()
block20.display()
block20.score()
block21.display()
block21.score()

block22.display()
block22.score()
block23.display()
block23.score()
block24.display()
block24.score()

block25.display()
block25.score()

chain.display()





imageMode(CENTER)
image(hexa_image,hexa.position.x,hexa.position.y,40,40)

drawSprite()

}
function mouseDragged() {
   
    Matter.Body.setPosition(hexa, {x:mouseX, y:mouseY})
    }


function mouseReleased() {
    chain.fly()
    hexa.pop()
    gameState = "launched";
}
 
function keyPressed() {
   
    chain.attach(hexa)
    }






