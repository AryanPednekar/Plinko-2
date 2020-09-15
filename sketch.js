const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var base;
var turn =0;
var score =0;
var particle;
var gameState=1;




function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

    base=new Ground(240,795,480,10)
    for (var k = 15;k <=width-10 ; k=k+80) {
      divisions.push(new Divisions (k,height-divisionHeight/2,10,divisionHeight));
     }
     
    for (var j = 15;j <=width ; j=j+50) {
      plinkos.push(new Plinko (j,75));
      
     }
     for (var j = 15;j <=width-10 ; j=j+50) {
       plinkos.push(new Plinko (j,175));
      }
      for (var j = 15;j <=width-10 ; j=j+50) {
        plinkos.push(new Plinko (j,275));
       }
       for (var j = 15;j <=width-10 ; j=j+50) {
        plinkos.push(new Plinko (j,375));
       }
       
       
      
       
       
      
  
     
}

function mouseReleased(){
  if (gameState!==2){
   
   turn++
   particle=new Particles(mouseX,10,10)
  }
}
function draw() {
  background(0,0,0);  
  Engine.update(engine);
 
  if(particle!=null){
    particle.display();
    if (particle.body.position.y>760) {
      if (particle.body.position.x<300) {
       score=score+500;
      // particle=null;
      // if (turn>=5)gameState=2;

      } 
   // }
    //if (particle.body.position.y>720) {
      if (particle.body.position.x>301 && particle.body.position.x<=600) {
       score=score+100;
       //particle=null;
    //   if (turn>=5)gameState=2;

      } 
   // }
     // if (particle.body.position.y>760) {
      if (particle.body.position.x>601 && particle.body.position.x<=900) {
       score=score+500;
       //particle=null;
     
    }particle=null;
    if (turn>=5)gameState=2;

  } 
  }
 
  

 for(var k=0;k<divisions.length;k++){
   divisions[k].display();
  }
 
   for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }
 base.display();
  if(turn===5){
    gameState=2;
    text("Game Over",200,200)
  }
  drawSprites();
  text(score,100,100)

}
 
