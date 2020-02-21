// Declarando pontos
var a  = {'x': 10, 'y':10}
var b  = {'x': 200, 'y':50}
var c  = {'x': 20, 'y':100}

// Configurações aqui.
function setup() { 
    createCanvas(windowWidth, windowHeight);
    frameRate(100)
}

// Desenhar
function draw() { 
    background(200)

    // Desenhando o Triângulo.
    triandoBresenham(a, b, c)
}

// desenha um ponto
function ponto(p, color = [0, 0, 0]) {
    point(aux0['x'], aux0['y']);     
}

// desenha uma linha de p1 ate p2
function bresenham(p0, p1, color = [0, 0, 0]) {
    stroke(color) // definindo a cor da linha
    var deltaX = p1['x'] - p0['x'];
    var deltaY = p1['y'] - p0['y'];

    var aux0  = {'x': p0['x'],'y': p0['y']}, 
    aux1 = {'x': p1['x'],'y': p1['y']}
    //armazenamento dos eixos
    //variaveis auxiliares para alteração dos pixels
    var eixoMaior, eixoMenor   

    var incrementoX0 = 0, 
        incrementoY0 = 0, 
        incrementoX1 = 0, 
        incrementoY1 = 0, 
        numerador;

    //testes para analisar se os eixos estão crescendo ou decrescendo de acordo com o delta

    if (deltaX > 0){            
        incrementoX0 = incrementoX1 = 1;
    }
    if (deltaX < 0){     
        incrementoX0 = incrementoX1 = -1;
    }
    if (deltaY > 0){              
        incrementoY0 = 1;
    }
    if (deltaY < 0){     
        incrementoY0 = -1 ;
    }

    if (Math.abs(deltaX) >= Math.abs(deltaY)){     
        eixoMaior = Math.abs(deltaX);
        eixoMenor = Math.abs(deltaY);
    } else {
        eixoMaior = Math.abs(deltaY);
        eixoMenor = Math.abs(deltaX);
            if(deltaY > 0){         
            incrementoY1 = 1;
        }
        if (deltaY < 0){    
            incrementoY1 = -1;
        } 
        incrementoX1 = 0;
    }
    numerador = eixoMaior/2;
    for (var i = 0; i <= eixoMaior; i++){
        point(aux0['x'], aux0['y']);

        numerador += eixoMenor;
        if (numerador > eixoMaior){
            numerador -= eixoMaior;
            aux0['x'] += incrementoX0;
            aux0['y'] += incrementoY0;
        }else {
            aux0['x'] += incrementoX1;
            aux0['y'] += incrementoY1;
        }
    } 
}

// Desenha um triangulo
function triandoBresenham(a, b, c, color = [0, 0, 0]) {
    bresenham(a, b, color)
    bresenham(b, c, color)
    bresenham(c, a, color)
}

// Bonus: move um ponto para direita com uma velocidade passada como parametro.
function moverPontoDir(p, v = 10){
    p['x'] += v
}
