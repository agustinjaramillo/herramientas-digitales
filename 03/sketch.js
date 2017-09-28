// * Este ejercicio fue realizado a partir del ejemplo 
// "Reach 3" (https://p5js.org/examples/interaction-reach-3.html).
// Tambien incluye la exploracion de las funciones keyPressed y 
// keyCode. 
//
// * INSTRUCCIONES * 
// Presione las teclas del teclado 1, 2 y 3 para controlar la
// velocidad de la pelota.
//
// * Ejercicio de Jose Agustin Jaramillo para la
// clase de Herramientas Digitales.
//----------------------------------------------------------

//Anuncio de variables. Las cuatro primeras son del codigo
//para que la pelota rebote. Las cinco ultimas son mias.
  ballX = 50,
	ballY = 50,
  ballXDirection = -1,
  ballYDirection = 1,
	ondas1 = -100,
  ondas2 = -50,
	ojos1 = 210,
  ojos2 = 270,
	velocidad = 5.0;
	
function setup() {
  
  createCanvas(500, 500);
} 

//En el draw se dibujan primero las partes basicas: el background,
//la linea blanca y el cuadro negro inferior.
function draw() {   
  
  background(255,0,0);
  
  fill(0);
  noStroke();
  rect(0,375,500,125);
  
  strokeWeight(3);
  stroke(255);
  line(0,375,500,375);
  
//El dibujo de las ondas son dos filas de arcos 
//repetidos con la funcion for. Para dar el movimiento 
//se modifica la posicion inicial en x con la variable 
//"ondas1" y "ondas2" segun la posicion en Y de la pelota.
  noStroke();
  fill(0)
  for(xarc=ondas1; xarc<width+100; xarc=xarc+100){
  	arc(xarc, 180, 50, 90, PI, TWO_PI);
  }

  for(xarc2=ondas2; xarc2<width+100; xarc2=xarc2+100){
  	arc(xarc2, 180, 50, 90, TWO_PI, PI);
  }
  
//Este es el codigo de la pelota moviendose. La variable "velocidad",
//añadida por mi, permite el control de la velocidad de la
//pelota con las teclas 1, 2 y 3 del teclado.
  ballX = ballX + 3.0 * ballXDirection;
  ballY = ballY + velocidad * ballYDirection;
  
  if(ballX > width-25 || ballX < 25) {
    ballXDirection *= -1;
  }
  if(ballY > height-150 || ballY < 25) {
    ballYDirection *= -1;
  }
  
  fill ('darkorange');
  noStroke();
  ellipse(ballX, ballY, 50, 50);
  
//Este es el movimiento de los arcos segun el movimiento en Y
//de la pelota.
  if(ballY>185){
    ondas1=-50;
    ondas2=-100;
  }
  else{
    ondas1=-100;
    ondas2=-50;
  }
  
//El dibujo de los ojos, en la parte inferior. Pense en que 
//las pupilas siguieran la posicion en X de la pelota.
  fill(255);
  ellipse(220,420,30,50);
  ellipse(280,420,30,50);
  fill(0);
  ellipse(ojos1,408,15,20);
  ellipse(ojos2,408,15,20);
  
//Para el movimiento de las pupilas, dividi el canvas en tres
//segmentos. Las pupilas tienen una posicion especifica 
//dependiendo de la posicion en X de la pelota.
  if(ballX>=0 && ballX<165){
    ojos1=210;
    ojos2=270;
  }
  else{
    ojos1=220;
    ojos2=280;
  }
  if(ballX>336 && ballX<=500){
    ojos1=230;
    ojos2=290;
  }
  
//Este es el texto con las instrucciones.
  textSize(13);
  fill(200);
  noStroke();
  text('PRESIONE 1, 2, 3 PARA ELEGIR LA VELOCIDAD DE LA BOLA.',
       60,480);
}

//Aca se explora la funcion keyPressed y keyCode, que establecen
//tres niveles de velocidad para la pelota de acuerdo con la tecla
//especifica del teclado que se presione: 1, 2 o 3.
function keyPressed(){
  if(keyCode==49){
    velocidad=1.0;
  }
  if(keyCode==50) {
    velocidad=5.0;
  }
  if(keyCode==51){
    velocidad=10.0;
  }

  return false;
}