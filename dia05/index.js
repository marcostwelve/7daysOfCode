import entradaDados from 'readline-sync';

var frutas = [];
var laticinios = [];
var congelados = [];
var doces = [];
var escolha;

    escolha = entradaDados.question("Você deseja adicionar alimentos na sua lista de compras? 1-S / 2-N ");
    do {
        if(escolha == 1) {
            var alimento = entradaDados.question("Qual alimento deseja adicionar: ");
            
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
        escolha = entradaDados.question("Deseja adicionar mais algum alimento? 1-S / 2-N ");
    } while(escolha != 2);

    for(const fruta of frutas) {
        console.log("\nLista de compras".toUpperCase());
        console.log("Frutas: "+fruta);
    }
    for(const laticinio of laticinios) {
        console.log("Laticinios: "+laticinio);
    }
    for(const congelado of congelados) {
        console.log("Congelados: "+congelado);
    }
    for(const doce of doces) {
        console.log("Doces: "+doce);
    }
