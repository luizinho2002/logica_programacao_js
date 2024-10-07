/* ENUNCIADO -> Matheus estava conversando com a sua noiva via mensagem de texto, quando ela lhe enviou a seguinte mensagem:

    1-4-3

    Ele não entendeu a mensagem, então ele perguntou o que isso significava, e ela respondeu que era 'I Love You" e logo ele percebeu que cada 
    número separado por um ' - ' é a quantidade de caracteres de cada uma das palavras que compõem a frase. Com isso, ele teve a ideia de criar 
    um programa que inserindo determinada frase, ele calcula a quantidade de caracteres de cada uma das palavras e separa os valores por ' - '. 
    Mas ele ainda teve a ideia de que o programa deveria receber várias frases linha por linha e ainda no final da execução do programa, a palavra 
    com a maior quantidade de letras deveria ser exibida.


    ENTRADA -> A entrada consiste de vários casos de teste. A primeira linha de um caso de teste contém uma 1 ≤ String ≤ 100 com uma única palavra 
    ou um conjunto de palavras que formam uma frase. Os casos de teste serão processados quando o número 0 for recebido. Não pode haver mais que um espaço 
    separando cada palavra.

    SAIDA -> Para cada caso de teste, exiba o número de caracteres de cada palavra que compõe a frase recebida. 
    Separe a quantidade de caracteres de cada palavra por um ' - '. Exiba também a palavra com a maior quantidade de caracteres de todas as 
    frases recebidas.

    OBS -> Se possuir palavras com números identicos de caracteres, cosiderar a última recebida.

*/

// RESOLUÇÃO

// Função para contar os caracteres de cada palavra em uma frase
function contarCaracteres(frase) {
    // Separa a frase em palavras usando o espaço como separador
    const palavras = frase.split(' ');

    // Cria um novo array com o tamanho de cada palavra
    const quantidadeCaracteres = palavras.map(palavra => palavra.length);

    // Junta os números em uma string, separando por hífen
    return quantidadeCaracteres.join('-');
}

// Inicializa uma variável para guardar a palavra mais longa
let palavraMaisLonga = ' ';

// Loop infinito para ler frases
while (true) {
    // Pede ao usuário para digitar uma frase
    const frase = prompt('Digite uma frase (0 para sair):');

    // Se o usuário digitar 0, sai do loop
    if (frase === '0') {
        break;
    }
    
    // Chama a função para contar os caracteres e mostra o resultado
    const resultado = contarCaracteres(frase);
    console.log(resultado);

    // Pega a última palavra da frase
    const ultimaPalavra = frase.replit(' ').pop();

    // Compara o tamanho da última palavra com a palavra mais longa atual
    if (ultimaPalavra.length > palavraMaisLonga.length) {
        // Se a última palavra for maior, atualiza a palavra mais longa
        palavraMaisLonga = ultimaPalavra;
    }
}

// Mostra a palavra mais longa encontrada
console.log(`A palavra mais longa é: ${palavraMaisLonga}`);