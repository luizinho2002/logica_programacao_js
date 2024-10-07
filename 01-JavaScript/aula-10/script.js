/*  ENUNCIADO:

     Joãozinho quer calcular e mostrar a quantidade de litros de combustível gastos em uma viagem, ao utilizar 
    um automóvel que faz 12 KM/L. Para isso, ele gostaria que você o auxiliasse através de um simples programa. Para efetuar
    o cálculo, deve-se fornecer o tempo gasto na viagem (em horas) e a velocidade média durante a mesma ( em km/h). Assim
    pode-se obter a distência percorrida e, em seguida, calcular quantos litros seriam necessários. Mostre o valor com 3 casas~
    decimais após ponto.
*/ 

// RESOLUÇÃO:

// Função para calcular o consumo de combustível
function calcularConsumo(tempoViagem, velocidadeMedia) {
    // Consumo do carro por litro (km/L)
    const consumoPorLitro = 12;

    // Calculando a distância percorrida
    const distanciaPercorrida = tempoViagem * velocidadeMedia;

    // Calculando o consumo de combustível
    const consumo = distanciaPercorrida / consumoPorLitro;

    // Formatando o resultado com 3 casas decimais
    const consumoFormatado = consumo.toFixed(3);

    // Imprimindo o resultado
    console.log(`O consumo de combustível foi de ${consumoFormatado} litros.`);
}

// Exemplo de uso
const tempoViagem = 5; // 5 horas
const velocidadeMedia = 80; // 80 km/h

calcularConsumo(tempoViagem, velocidadeMedia); 
