// * Este ejercicio fue realizado desde cero. Sin embargo
// use las referencias de random(), arc(), 
// strokeWeight() y de la funcion mousePressed(). 
// * Me imagine el ejercicio aun mas complejo, pero tuve dos problemas:
// (1) No encontre una alternativa en p5js a la funcion de "class" 
// en Processing –que me refirieron–. Esa era la idea que tenia para
// que "parara de llover".
// (2) No pude modificar la sonrisa del emoticon porque no supe
// como enunciar antes de la funcion setup una variable que incluia 
// a la constante PI.
// * Ejercicio de Jose Agustin Jaramillo para la
// clase de Herramientas Digitales.
//--------------------------------------------------------------------

//Enunciacion de variables con valores iniciales y funcion setup.
var clima=50, colorcara='gold', mensaje="Haga click para que amanezca", colortexto=255;

function setup() { 
  createCanvas(600, 600);
} 

//Funcion setup, posicionamiento de variable del background. 
function draw() {   
  background(clima);

//Creacion de la matriz de lluvia a partir del uso de "for" y de "random".
  for(lluviax=-10; lluviax<605; lluviax=lluviax+30){
    for(lluviay=-10; lluviay<610; lluviay=lluviay+21){
      line(lluviax+random(-1,1), lluviay+random(-1, 1), 
        lluviax+random(-2, 2), lluviay+random(18,22));
      strokeWeight(1);
      stroke(0,100,255);
    }
  }

//Decidi usar dos matrices superpuestas de lluvia para quitarle uniformidad
//a la "lluvia" a partir de la diferencia de colores y para evitar que los
//puntos de cruce de las lineas se dieran siempre en la misma coordenada y.
    for(lluviax1=5; lluviax1<605; lluviax1=lluviax1+30){
    for(lluviay1=-5; lluviay1<610; lluviay1=lluviay1+21){
      line(lluviax1+random(-2,2), lluviay1+random(-2, 2), 
        lluviax1+random(-2, 2), lluviay1+random(18,22));
      stroke(0,80,255)
    }
  }
    
//El texto tambien va con variables para permitir interactividad a partir
//del MousePressed.
  textSize(20);
  fill(colortexto);
  noStroke();
  text(mensaje,165,100);
  
//Dibujo de la cara triste, con variable para cambiarle el color de dia. 
  fill(colorcara);
  noStroke();
  ellipse(300,450,150);
  fill(0);
  ellipse(275,425,20);
  ellipse(325,425,20);
  
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(300, 490, 70, 70, PI, TWO_PI);
}

//En la funcion mousePressed se expresan los cambios en las variables del
//texto, el fondo y el color de la cara triste. Se arranca por el fondo.
function mousePressed(){
  if(clima==50){
    clima='lightskyblue';
  }
    else{
      clima=50;
    }
  
//Sigue la cara... Cuando escribia los colores en RGB no me funcionaba bien
//la variable con el mousePressed, por lo que encontre la solucion al
//enunciar los colores con el sistema SVG.
  if(colorcara=='gold'){
    colorcara='yellow';
  }
  	else{
      colorcara='gold';
    }
  
  if(mensaje=="Haga click para que amanezca"){
  	mensaje="Pero nunca va a dejar de llover";
  }
  	else{
    	mensaje="Haga click para que amanezca";
    }
  
//Y finalmente el color del texto.
  if(colortexto==255){
  	colortexto=0;
  }
  	else{
    	colortexto=255
    }
  
}