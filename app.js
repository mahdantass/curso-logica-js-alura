alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto -> while
while(chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
//se o chute for igual ao numero secreto 
if(chute == numeroSecreto){
    //PARA
    break;
} else{
    if(chute > numeroSecreto){
        alert(`O numero secreto é menor que ${chute}`);
    }
    else{
        alert(`O numero secreto é maior que ${chute}`);
    }
    //tentativas = tentivas + 1
    tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
alert(`Isso ai! Voce descobriu o numero secreto: ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
