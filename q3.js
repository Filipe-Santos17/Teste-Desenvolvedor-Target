/*
3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const faturamentoMensal = {
    "dias": {
        "01": 1000.00,
        "02": 1500.50,
        "03": 0, // Dia sem faturamento
        "04": 2000.75,
        // ... outros dias do mês
    }
};

// Extrair valores de faturamento e remover dias sem faturamento
const faturamentos = Object.values(faturamentoMensal.dias).filter(valor => valor > 0);

// Calcular a média mensal de faturamento
const somaFaturamento = faturamentos.reduce((total, valor) => total + valor, 0);
const mediaMensal = somaFaturamento / faturamentos.length;

// Encontrar o menor e o maior faturamento
const menorFaturamento = Math.min(...faturamentos);
const maiorFaturamento = Math.max(...faturamentos);

// Contar dias com faturamento acima da média
const diasAcimaDaMedia = faturamentos.filter(valor => valor > mediaMensal).length;

// Imprimir os resultados
console.log(`Menor valor de faturamento: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
