var path,boy, leftBoundary,rightBoundary;
var path,pathImg,boyImg;
var i;
var runner, runnerImg
function preload(){
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png")
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path = createSprite(180,200,400,20);
//adicione uma imagem para a pista
path.addImage("moving",pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;
runner = createSprite(200,370,150,150);
runner.addAnimation("running", runnerImg);
runner.scale=0.05
//crie um sprite de menino
boy = createSprite(200,300,150,150);
//adicione uma animação de corrida para ele
boy.addAnimation("running", boyImg);
boy.scale=0.4;
  
//crie um limite à esquerda
leftBoundary = createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda

//crie um limite à direita
rightBoundary = createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita

};

function draw() {
  background(0);
  path.velocityY = 6;
  
  // mover o menino com o mouse usando mouseX
  boy.x=World.mouseX;
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  //código para redefinir o fundo
  if(path.y > 500 ){
    path.y = height/2;
  }
  
  drawSprites();
}
