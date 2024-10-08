const teste1 = (callback) => {
    setTimeout(() => {
        console.log('teste 1');
    }, 200)
   
}

const teste2 = (callback) => {
    setTimeout(() => {
        console.log('teste 2');
        callback();
    }, 600)
}

const teste3 = (callback) => {
    setTimeout(() => {
        console.log('teste 3');
    }, 300)
    
}

const teste4 = (callback) => {
    setTimeout(() => {
        console.log('teste 4');
    }, 1)
    
}  

const funcaoCallback = () => {
    console.log('SALVOU O USUÁRIO');
}

teste1();
console.log(1 + 1);
teste2(funcaoCallback);
console.log(2 + 2);
teste3();
console.log(3 + 3);
teste4();
console.log(4 + 4);