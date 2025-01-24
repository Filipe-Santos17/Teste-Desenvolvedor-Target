/*
1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
*/

const INDICE = 13;
let SOMA = 0, K = 0;

// Loop que executa enquanto K for menor que INDICE
while (K < INDICE) {
    K = K + 1; // Incrementa K
    SOMA = SOMA + K; // Acumula a soma de K em SOMA
}

console.log(SOMA); // Imprime o valor final de SOMA
