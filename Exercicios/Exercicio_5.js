// Exercicio 5

function inverterString(str) {
    let strInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }
    return strInvertida;
}

let str = 'Olá Recrutador!'; // Novamente utilizei uma variável como a entrada.
console.log(inverterString(str));