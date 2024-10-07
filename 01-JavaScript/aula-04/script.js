/* 
    O pote -> A variável quantidade é como um pote com 10 bolinhas de gude.

    A sua mão -> A variável soma representa a quantidade de bolinhas que você já pegou do pote. No início você tem 1 bolinha na mão.

    Pegando as bolinhas -> O for é como um loop que te faz pegar as bolinhas uma por uma do pote.

    Contando as bolinhas -> Dentro do loop, a linha console.log(i) serve para mostrar na tela qual bolinha você está pegando.

    Somando as bolinhas -> A linha soma = soma + i faz você adicionar a bolinha que você acabou de pegar à quantidade de bolinhas que já tinha na mão.
    
*/

const quantidade = 10;
let soma = 1;

for(let i = 0; i < quantidade; i++) {
    console.log(i);
    soma = soma + i;
}

console.log('ACABOU', soma); 
