// * Variación del ejemplo ex_04, de la carpeta DOM
// de p5js, en Processing. 
// * Se deben mover los controles para modificar el 
// tamaño y la forma del cuadrilatero central.
// * Ejercicio de Jose Agustin Jaramillo para la
// clase de Herramientas Digitales.

// Anuncio de variables.
var arrSlider, abaSlider, izqSlider, derSlider, r, g, b, r1, g1, b1;

// Setup.
function setup() {
  createCanvas(800, 800);

// Creacion de los controles.
  arrSlider = createSlider(0, 400, 50);
  arrSlider.position(100, 150);
  abaSlider = createSlider(0, 400, 50);
  abaSlider.position(550, 650);
  izqSlider = createSlider(0, 400, 50);
  izqSlider.position(100, 650);
  derSlider = createSlider(0, 400, 50);
  derSlider.position(550, 150);
	
// Valores iniciales de las variables: r, g y b para
// el cuadrado central; r1, g1 y b1 para el background.
  r=20;
	g=130;
	b=20;
	r1=100;
  g1=100;
  b1=100;
}

// Acá empieza el draw.
function draw() {
  background(r1,g1,b1);

// Estas son las lineas punteadas que delimitan
// las zonas del canvas.
  for(var vodka=0; vodka<800; vodka=vodka+10){
    ellipse(vodka,height/2,3,3);
    ellipse(width/2,vodka,3,3);
  }
  
// Variacion del color del cuadrilatero central.
  r=r+10;
	g=g+15;
	b=b+5;
	
// Control de la variacion de los colores
// para que los valores se mantengan dentro del
// rango apropiado para y den la sensacion
// de un color "random".
  if(r>255){
		r=20;
	}
						
	if(g>255){
		g=20;
	}
	
	if(b>255){
		b=20;
	}
	
// Variacion del color del background a partir de 
// la ubicacion del mouse.
  if(mouseX<=width/2 && mouseY<=height/2){
    r1=255;g1=225;b1=0;
  	}
  
  if(mouseX>width/2 && mouseY<=height/2){
     r1=0;g1=0;b1=255;
     }
  
  if(mouseX<=width/2 && mouseY>height/2){
     r1=255;g1=0;b1=0;
     }
  
  if(mouseX>width/2 && mouseY>height/2){
     r1=0;g1=200;b1=0;
     }
  
// El cuadrilatero toma un color fijo mientras se
// modifica su forma.
  if(mouseIsPressed){
	r1=50;g1=50;b1=50;r=200;b=200;g=200;
  }
			
// Asignacion de variables para los controladores.
  var arr = arrSlider.value();
  var der = derSlider.value();
  var aba = abaSlider.value();
  var izq = izqSlider.value();
  
// Las variables del controlador determinan las
// coordenadas de los puntos que formaran el
// cuadrilatero central.
  var x1 = 400-(arr/2);
  var y1 = 400-(izq/2);
  var x2 = 400+(arr/2);
  var y2 = 400-(der/2);
  var x3 = 400+(aba/2);
  var y3 = 400+(der/2);
  var x4 = 400-(aba/2);
  var y4 = 400+(izq/2);
  
// Dibujo del cuadrilatero central.
  fill(r,g,b);
	noStroke();
  quad(x1,y1,x2,y2,x3,y3,x4,y4);
  
// Textos de los controladores.
  fill(255);
	textSize(15);
  text("linea superior", 120, 120);
  text("linea inferior", 575, 700);
  text("linea izquierda", 120, 700);
  text("linea derecha", 570, 120);
}