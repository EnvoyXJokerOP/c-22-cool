const Engine = Matter.Engine
const World  = Matter.World
const Bodies = Matter.Bodies
console.log(Bodies)
var engine,world
var ball,ground

function setup() {
  createCanvas(800,400)
engine=Engine.create();
world=engine.world
var ball_OP={
  restitution:1,
  friction:0.4,
  density:1
}
ball= Bodies.circle(200,10,100,ball_OP)
var ground_epic={
  isStatic:true
}
ground=Bodies.rectangle(400,380,800,5,ground_epic)
World.add(world,ball)  
World.add(world,ground)
console.log(ball)
 
}

function draw() {
background("blue")
Engine.update(engine);  
ellipse(ball.position.x,ball.position.y,50,50)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,5)

  drawSprites();
}

