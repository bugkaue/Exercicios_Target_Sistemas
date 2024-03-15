// Exercicio 2

function fibonacci(numero) {
    if (numero <= 0) return false;

    let a = 0;
    let b = 1;
    while (b < numero) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b === numero;
}

let numero = 55; // Utilizei essa variável como a entrada.
if (fibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
