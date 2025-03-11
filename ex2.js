//desafios do curso de lógica de programação - modulo 2

//Pergunte ao usuário qual é o dia da semana. 
// Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
// Caso contrário, mostre "Boa semana!".
let diaSemana = prompt ('Qual é o dia da semana?');
if(diaSemana == 'Sábado'){
    console.log('Bom final de semana!');}
else if(diaSemana == 'Domingo'){
    console.log('Bom final de semana!');}
    else{
        console.log('Boa semana!');
    }

//Verifique se um número digitado pelo usuário é positivo ou negativo. 
// Mostre um alerta informando.
numeroDigitado = prompt('Digite um numero!')
    if(numeroDigitado >= 0){
        alert('Numero positivo!');
    }
    else{
        alert('Numero negativo!');
    }

//Crie um sistema de pontuação para um jogo. 
// Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
// Caso contrário, mostre "Tente novamente para ganhar.".
pontuação = 110
    if(pontuação >= 100){
        console.log('Parabens, voce venceu!');
    }
    else{
        console.log('Tente novamente para ganhar!');
    }

//Crie uma mensagem que informa o usuário sobre o saldo da conta, 
// usando uma template string para incluir o valor do saldo.
let saldo = 1500;
alert(`O saldo da sua conta é: ${saldo}`);

//Peça ao usuário para inserir seu nome usando prompt. 
// Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario = prompt('Insira seu nome: ');
alert(`Boas-vindas ${nomeUsuario}`);