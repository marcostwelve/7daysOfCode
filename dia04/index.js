import entradaDados from 'readline-sync';
let tentativas = 1;
let tentativasRestantes = 3;

let numeroSorteado = Math.floor(Math.random() * (10 - 0) + 1 + 0);

let numeroCerto;
let numeroEncontrado = false;

console.log("Sorteio dos guris!!");

while(!numeroEncontrado && tentativasRestantes > 0) {
    numeroCerto = entradaDados.question("Chute um número de 1 a 10: ");

    if(numeroCerto == numeroSorteado) {
        numeroEncontrado = true;
        console.log("Parabéns!! Você acertou".toUpperCase());
        console.log("Você acertou em "+tentativas+" tentativas");
    }
    else if(numeroSorteado > numeroCerto) {
        tentativas++;
        tentativasRestantes--;
        console.log("Você errou o número!!! Que pena");
        console.log("O número sorteado é maior!")
        console.log("Você tem mais "+tentativasRestantes+" tentativas");
    }
    else if(numeroSorteado < numeroCerto){
        tentativas++;
        tentativasRestantes--;
        console.log("Você errou o número!!! Que pena");
        console.log("O número sorteado é menor");
        console.log("Você tem mais "+tentativasRestantes+" tentativas");
    }
    if(tentativasRestantes == 0) {
        console.log("Você perdeu o jogo! Que pena :(");
        console.log("O número sorteado é: "+numeroSorteado);
    }

}