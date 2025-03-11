//desafios do curso de lógica de programação - modulo 3

//Crie um contador que comece em 1 e vá até 10 usando um loop while. 
// Mostre cada número.
let contador = 1;
while(contador <= 10){
    console.log(contador);
    contador++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. 
// Mostre cada número.
let contadorDois = 10;
while(contador >= 0){
    console.log(contador);
    contador--;
}

//Crie um programa de contagem regressiva. 
// Peça um número e conte deste número até 0, 
// usando um loop while no console do navegador.
let numero = prompt('Digite um numero para contagem regressiva');
while(numero >= 0){
    console.log(numero)
    numero--;
}

//Crie um programa de contagem progressiva. Peça um número 
//e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroDois = prompt('Digite um numero para contagem progressiva');
let contadorUm = 0;
while(contadorDois <= numeroDois){
    console.log(contadorUm)
    contador++;
}