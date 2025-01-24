/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

// Faturamento mensal por estado
const revenues = [
    {
        estado: "SP",
        valor: 67836.43,
    },
    {
        estado: "RJ",
        valor: 36678.66,
    }, 
    {
        estado: "MG",
        valor: 29229.88,
    }, 
    {
        estado: "ES",
        valor: 27165.48,
    },
    {
        estado: "Outros",
        valor: 19849.53,
    }
]

/**
 * @param {[{estado: String, valor: Number}]} revs 
 * @returns {Boolean}
 */
function percentageOfRepresentationEachState(revs){

    // Calculando o faturamento total
    const totalRevenue = revs.reduce((acc, rev) => {
        if(rev?.valor && typeof rev.valor !== "number") return acc
        return acc + rev.valor
    }, 0)

    console.log(`Valor Total: ${totalRevenue}`)

    // Calculando o percentual de cada estado
    const percentPerState = revs.map(rev => {
        rev.percent = (rev.valor / totalRevenue) * 100;
        console.log(`${rev.estado}: ${rev.percent.toFixed(2)}%`)
    })

    return {total: totalRevenue, states:percentPerState}
}

percentageOfRepresentationEachState(revenues)