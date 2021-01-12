var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;



  var bg, bgimg;
  var cap;
  var man, animation;
var light, crystal;
var drops = [];


function preload(){
 bgimg = loadImage("images/bg.jpeg"); 
 animation = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png");  
 //crystal=loadAnimation("images/thuderbolt/1.png","images/thuderbolt/2.png","images/thuderbolt/2.png","images/thuderbolt/4.png");
crystal = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png");
}

function setup(){
    createCanvas(500, 600); 
    engine = Engine.create();
  world = engine.world;
  cap = new Umbrella(240,370);
  man = createSprite(250,465,100,100);
  man.addAnimation("run",animation);
  man.scale = 0.4;

  
}

function draw(){
    background(bgimg);  
    Engine.update(engine);
    if(frameCount%150 === 0){
        light = createSprite(random(100,500),100,20,20);
        light.addAnimation("thund",crystal);
        light.scale = 0.5;
        light.rotation = -20;
        light.lifetime = 10;
      }
      
      if(frameCount%1===0){
        drops.push(new Drops(random(0,500), 10,10));
        
      }
      cap.display();    
for(var i =0; i < drops.length; i++) {
  drops[i].display();
}
drawSprites();

}   

