var sky,skyImg;
var boy,boyIMG;

function preload(){
skyImg = loadImage("sprites/sky-271.jpg");
boyIMG = loadImage("sprites/boy running.png");

}


function setup(){
createCanvas(windowWidth,windowHeight);

sky = createSprite(windowWidth/2,windowHeight/2, windowWidth,windowHeight);
sky.addImage(skyImg);

boy = createSprite(200,100);
boy.addImage(boyIMG);
boy.scale=0.3;
}

function draw(){
background(82,134,192);

if(keyCode === UP_ARROW){
    boy.y=boy.y-10;
}
if(keyCode === DOWN_ARROW){
    boy.y=boy.y+10;
}
if(keyCode === LEFT_ARROW){
    boy.x=boy.x-10;
}
if(keyCode === RIGHT_ARROW){
    boy.x=boy.x+10;
}



drawSprites();

}