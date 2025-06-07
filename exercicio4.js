const regiao = prompt ("Digite aqui a sua região:").toLocaleLowerCase();
const pesoDoProduto = Number (prompt ("Digite aqui o peso do seu produto:"));

let frete = 0;

switch (regiao) {
    case 'norte':
        frete = 24 + (2.20 * pesoDoProduto);
        console.log("O valor do frete para a região Norte é: R$" + frete.toFixed(2));
        break;
    
    case 'nordeste':
        frete = 22 + (2.10 * pesoDoProduto);
        console.log("O valor do frete para a região Nordeste é: R$" + frete.toFixed(2));
        break;
    
    case 'centro-oeste':
        frete = 20 + (2.00 * pesoDoProduto);
        console.log("O valor do frete para a região Centro-Oeste é: R$" + frete.toFixed(2));
        break;

    case 'sudeste':
        frete = 16 + (1.80 * pesoDoProduto);
        console.log("O valor do frete para a região Sudeste é: R$" + frete.toFixed(2));
        break;

    case 'sul':
        frete = 18 + (1.90 * pesoDoProduto);
        console.log("O valor do frete para a região Sul é: R$" + frete.toFixed(2));
        break;

    default:
        console.error("Região Invalida.")
        break;
}