function somaRecursiva(n) {
    // Caso base: se n for 0, a soma é 0
    if (n === 0) {
        return 0;
    } else {
        // Caso recursivo: soma n com a soma de 1 até n-1
        return n + somaRecursiva(n - 1);
    }
}

// Exemplo de uso
const resultado = somaRecursiva(15);
console.log(resultado); // Imprime 55