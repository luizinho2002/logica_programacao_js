// ENUNCIADO -> Escreva um algortimo que leia 2 valores inteiros X e Y calcule a soma dos números que não são múltiplos de 13 entre X e Y, incluindo ambos.

// RESOLUÇÃO

function multiplos13(valor1, valor2) {
// Essa função calcula a soma de todos os números entre valor1 e valor2 (inclusive) que NÃO são múltiplos de 13.

    let maior = 0; // Variável para armazenar o maior valor entre valor1 e valor2.
    let menor = 0; //  Variável para armazenar o menor valor entre valro1 e valor2.
    let soma = 0; // Variável para armazenar a soma dos números que não são múltiplos de 13.

    // Verifica qual valor é maior e qual valor é menor, armazenando-os nas variáveis correspondentes.
    if (valor1 > valor2) {
        maior = valor1;
        menor = valor2;
    } else {
        maior = valor2;
        menor = valor1;
    }

    // Loop que itera de menor até maior (inclusive).
    for(menor; menor <= maior; menor++) {
        // Verifica se o número atual (menor) não é múltiplo de 13.
        if (menor % 13 !== 0) {
            // Se não for múltiplo de 13, adiciona à soma.
            soma += menor;
        }
    }
    
    // Retorna a soma dos números que não são múltiplos de 13.
    return soma;
}

console.log(multiplos13(200, 100)); // Chama a função com os valores 200 e 100 e imprime o resultado no console.