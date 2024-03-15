// Exercicio 1 =
// A variável soma terá o valor da soma dos 13 primeiros números que resulta em 91.
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 = 91.

let indice = 13, soma = 0, k = 0;

while (k < indice) {
    k = k + 1;
    soma = soma + k;
}

console.log(soma);