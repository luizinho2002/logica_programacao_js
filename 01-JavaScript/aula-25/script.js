const luiz = {
    idade: 22,
    peso: 70,
    nome: 'Luiz Fernando',
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    endereco: 'R. Brasilío Itiberê',
    numero: 4270,
    pais: 'Brasil',
    temFilhos: true,
}

const exibirInformacoes = (pessoa, qualquerInformacao) => {
    console.log(`${qualquerInformacao} do(a) ${pessoa.nome}:`, pessoa[qualquerInformacao]);
}

exibirInformacoes(luiz, 'genero');