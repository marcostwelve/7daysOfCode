// Importando o plugin de input readline-sync
import entradaDados from 'readline-sync';

// Arrays para guardar os alimentos
var frutas = [];
var laticinios = [];
var congelados = [];
var doces = [];
var escolha;

    //Perguntando para o usuário se deseja adicionar produtos na lista de compras
    escolha = entradaDados.question("Você deseja adicionar alimentos na sua lista de compras? [1-Sim 2-Não]\n ");

    // Looping para realizar a pegar os alimentos adicionados e colocar o array da categoria
    do {
        if(escolha == 1) {
            var alimento = entradaDados.question("Qual alimento deseja adicionar: ");

            console.clear();
            var categoria = entradaDados.question("Qual categoria o alimento escolhido se encaixa: \n1-Frutas\n2-Laticínios\n3-Congelados\n4-Doces\n");
            if(categoria == 1 || categoria == 'frutas') {
                frutas.push(alimento);
            }
            else if(categoria == 2 || categoria == 'laticinios') {
                laticinios.push(alimento);
            }
            else if(categoria == 3 || categoria == 'congelados') {
                congelados.push(alimento);
            }
            else if(categoria == 4 || categoria == 'doces') {
                doces.push(alimento);
            }
        }
        
        // Perguntando para o usuário se necessita adicionar ou remover algum alimento
        adicionarRemover();
        
    } while(escolha != 4);

    // Exibindo a lista final com todas as alterações realizadas
    mostrarLista();


    // Função para remover itens da lista
    function remover() {
        escolha = entradaDados.question("De qual lista deseja remover itens: \nFrutas\nLaticínios\nCongelados\nDoces\n");

            switch(escolha) {
                case "frutas":
                    if(frutas.length > 0) {
                        console.log("Frutas: "+frutas);
                        var remover = entradaDados.question("Digite a posição do produto que você quer remover: ");
                        remover = remover - 1;
                        var quantidade = entradaDados.question("Quantos itens deseja remover: ");
                        var itensRemovidos = frutas.splice(remover, quantidade);
                    }
                    else {
                        console.log("A lista de compras está vazia!");
                    }
                    break;
                case "laticinios":
                    if(laticinios.length > 0) {
                        console.log("Laticínios: "+laticinios);
                        var remover = entradaDados.question("Digite a posição do produto que você quer remover: ");
                        remover = remover - 1;
                        var quantidade = entradaDados.question("Quantos itens deseja remover: ");
                        var itensRemovidos = laticinios.splice(remover, quantidade);
                    }
                    else {
                        console.log("A lista de compras está vazia!");
                    }
                    break;
                case "congelados":
                    if(congelados.length > 0) {
                        console.log("Congelados: "+congelados);
                        var remover = entradaDados.question("Digite a posição do produto que você quer remover: ");
                        remover = remover - 1;
                        var quantidade = entradaDados.question("Quantos itens deseja remover: ");
                        var itensRemovidos = congelados.splice(remover, quantidade);
                    }
                    else {
                        console.log("A lista de compras está vazia!");
                    }
                    break;
                case "doces":
                    if(doces.length > 0) {
                        console.log("Doces: "+doces);
                        var remover = entradaDados.question("Digite a posição do produto que você quer remover: ");
                        remover = remover - 1;
                        var quantidade = entradaDados.question("Quantos itens deseja remover: ");
                        var itensRemovidos = doces.splice(remover, quantidade);
                    }
                    else {
                        console.log("A lista de compras está vazia!");
                    }
                    break;
                default:
                    console.log("Opção Inválida!");
                    break;
            }
    }

    // Função para mostrar a lista
    function mostrarLista() {
        console.log("lista de compras".toUpperCase());
        console.log("Frutas: "+frutas+"\n");
        console.log("Laticínios: "+laticinios+"\n");
        console.log("Congelados: "+congelados+"\n");
        console.log("Doces: "+doces);
    }


    // Função para adicionar e/ou remover itens da lista
    function adicionarRemover() {
        escolha = entradaDados.question("Deseja adicionar ou remover algum alimento? [1-Adicionar\n 2-Remover\n3-Ver lista\n 4-Sair]\n ");
        escolha = Number(escolha);

        switch(escolha) {
            case 2:
                console.clear();
                remover();
                break;
            case 3:
                console.clear();
                mostrarLista();
                break;
        }
    }