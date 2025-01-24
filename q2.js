/* 
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a 
soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um 
programa na linguagem que desejar onde, informado um número, ele calcule a sequência de 
Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

/**
 * @param {Number} num 
 * @returns {Boolean}
 */
function isInFibonacci(num) {
    if (num === 0 || num === 1) {
        return true;
    }

    let a = 0;
    let b = 1;
    let proximo;

    while (b < num) {
        proximo = a + b;
        a = b;
        b = proximo;
    }

    return b === num;
}

//Informe um número para verificar se pertence à sequência de Fibonacci
const numero = 17
const numeroInformado = isInFibonacci(numero);

// Verificar se o número informado pertence à sequência de Fibonacci
numeroInformado ?
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`) :
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
