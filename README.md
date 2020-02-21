# Trabalho de Computação Gráfica

Aluno: Ericson Rogerio Moreira.

## Objetivos

Reproduzir o trabalho que esta em  https://sites.google.com/site/felipealvesaraujocg/trabalho1

## Descrição

Um simples html e código JavaScript para desenhar um triangulo usando o algoritmo de Bresenham(https://pt.wikipedia.org/wiki/Algoritmo_de_Bresenham). 

Código:
* index.html -> html básico para visualizar o resultado em qualquer browser.
* p5.js -> biblioteca em JS que foi utilizada(https://p5js.org/).
* sketch.js -> implementação.

Explicando: o index.html é responsável por chamar o código JS que está em sketch.js. Em sketch.js estão declarados alguns pontos e em seguida desenhamos um triangulo com esses pontos. Basicamente, temos três métodos:

* function ponto(p, color = [0, 0, 0]) { ... } que desenha um ponto;
* function bresenham(p0, p1, color = [0, 0, 0]) { ... } que desenha uma linha e;
* function triandoBresenham(a, b, c, color = [0, 0, 0]) { ... } que desenha um triando.

