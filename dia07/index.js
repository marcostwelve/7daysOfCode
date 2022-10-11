// Importando o plugin para realizar input
import entradaDados from 'readline-sync';

console.log("\nSimples Calculadora\n".toUpperCase());

let menu = false;

while(!menu) {
    
    // Perguntando para o usuário qual operação deseja realizar
    let operacao = entradaDados.question("Qual operação deseja realizar \n1- Soma\n2- Subtração\n3- Multiplicação\n4- Divisão\n0- Sair\n");

    // Comando para limpar o console
    console.clear();
    operacao = Number(operacao); // Covertendo o input do usuário (string) para number
    switch(operacao) {
        case 1:
            soma()
            break;
        case 2:
            subtracao()
            break;
        case 3:
            multiplicacao()
            break;
        case 4:
            divisao()
            break;
        case 0:
            menu = true;
            console.log("Calculadora encerrada\nAté a próxima!");
            break;
        default:
            console.log("Opção inválida! Tente novamente");
            break;                 
    
    }
}


// Funções de cálculo

function soma() {
    let num1 = entradaDados.question("Digite o primeiro número: ");
    let num2 = entradaDados.question("Digite o segundo número: ");
    let soma = Number(num1) + Number(num2);
    console.log("O resultado é: "+soma);
}

function subtracao() {
    let num1 = entradaDados.question("Digite o primeiro número: ");
    let num2 = entradaDados.question("Digite o segundo número: ");
    let subtracao = Number(num1) - Number(num2); // Somente na soma é necessário utilizar o Number. Nas outras operações é opcional
    console.log("O resultado é: "+subtracao);
}

function multiplicacao() {
    let num1 = entradaDados.question("Digite o primeiro número: ");
    let num2 = entradaDados.question("Digite o segundo número: ");
    let multiplicacao = Number(num1) * Number(num2);
    console.log("O resultado é: "+multiplicacao);
}

function divisao() {
    let num1 = entradaDados.question("Digite o primeiro número: ");
    let num2 = entradaDados.question("Digite o segundo número: ");
    let divisao = Number(num1) / Number(num2);
    console.log("O resultado é: "+divisao);
}


