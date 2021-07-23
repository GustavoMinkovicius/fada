var starImg;
var star, starBody;
//criar variável para sprite de fada e imgFada
var fada, imgFada;
var som
var fundo

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("star.png");
    //carregar animação de fada 
    imgFada = loadAnimation("fairyImage1.png" , "fairyImage1.png");
    som = loadSound("JoyMusic.mp3")
    fundo = loadImage("starNight.png");
}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    som.play();
    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(130,520)
    fada.addAnimation("voando", imgFada);
    fada.scale = 0.25;


    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}
function draw(){

    background(fundo);

    star.x = starBody.position.x;
    star.y = starBody.position.y;

    if(star.y > 470 && starBody.position.y > 740){
        Matter.Body.setStatic(starBody,true);
    }


    drawSprites();
}

function keyPressed(){
    
    if(keyCode === RIGHT_ARROW){
        fada.x += 20;
    }

    if(keyCode === LEFT_ARROW){
        fada.x -= 20;
    }

    if(keyCode === DOWN_ARROW){
        Matter.Body.setStatic(starBody,false);
    }
}
