// Exercicio 2

function fibonacci(num) {
    if (num <= 0) return false;

    let a = 0;
    let b = 1;
    while (b < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b === num;
}

let num = 55; // Utilizei essa variável como a entrada.
if (fibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}
