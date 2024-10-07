/* 
    ENUNCIADO:

    lEIA UM VALOR INTEIRO X. EM SEGUIDA APRESENTE OS 6 VALORES ÍMPARES CONSECUTIVOS A PARTIR DE X, UM VALOR POR LINHA,
    INCLUSIVE O X SE FOR O CASO
*/

// RESOLUÇÃO:

// Constante para definir a quantidade de números ímpares a serem impressos
const QUANTIDADE = 6;

// Função para encontrar e imprimir números ímpares a partir de um valor inicial
function numerosImpares(valor) {
   
    // Contador para acompanhar quantos números ímpares já foram encontrados
    let contar = 0;

    // Variável para armazenar o valor atural sendo verificado
    let novoValor = valor;

    // Loop que continua enquanto não encontramos os 6 números ímpares
    while (contar < QUANTIDADE) {
        
        // Verifica se o número atual é ímpar (resto da divisão por 2 é diferente de 0)
        if (novoValor % 2 !== 0) {
            
             // Imprime o número ímpar encontrado
            console.log(novoValor);

            // Incrementa o contador de números ímpares encontrados
            contar++;
        }

        // Incrementa o valor para verificar o próximo número
        novoValor++;
    }

}

// Chama a função, passando o valor inicial 98457
numerosImpares(98547);