const mensagem = 'Meu nome é Luiz, ';
const mensagem2 = 'Tenho 22 anos.';


console.log('tamanho', mensagem.length);
console.log('Concat', mensagem.concat(mensagem2));
console.log('Concat','TESTE' + ' ' + mensagem + ' ' + mensagem2);
console.log('ES:', `ECMASCRIPT ${mensagem} ${mensagem2}`);
console.log('Quebrar em array', mensagem.split(' '));


console.log('UP:', mensagem.toUpperCase());
console.log('DOWN:', mensagem.toLocaleLowerCase());
console.log('Replace: ', mensagem.replace('Luiz', 'Edmar') )