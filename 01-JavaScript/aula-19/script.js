function calcular() {
    console.log('calcular');
    console.log(arguments);
}


const calcular2 = function() {
    console.log('calcular 2');
    return 53252;
}

const calcular3 = (funcao) => {
    console.log('calcular 3');
    calcular2();
    funcao();
}

calcular3(calcular2);
