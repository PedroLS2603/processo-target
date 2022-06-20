const faturamento = [ 
    {
        estado: 'SP',
        valor: 67836.43
    }, 
    {
        estado: 'RJ', 
        valor: 36678.66
    }, 
    {
        estado: 'MG',
        valor: 29229.88
    }, 
    {
        estado: 'ES',
        valor: 27165.48
    },
    {
        estado: 'Outros',
        valor: 19849.53
    }
]


/* Calcula faturamento total */

function calculaFaturamentoTotal(detalhes) {
    total = 0;
    for(let i = 0; i < detalhes.length; i++) {
        const faturamentoEstado = detalhes[i];
        total += faturamentoEstado.valor
    }
    return total;
}

function relatorioFaturamento(detalhes) {
    const faturamentoTotal = calculaFaturamentoTotal(detalhes);
    const relatorioPorcentagemFaturamento = [];
    for(let i = 0; i < detalhes.length; i++) {
        const faturamentoEstado = detalhes[i];

        const faturamentoPorcentagemEstado = {estado: faturamentoEstado.estado, porcentagem: ((faturamentoEstado.valor / faturamentoTotal) * 100)};

        relatorioPorcentagemFaturamento.push(faturamentoPorcentagemEstado)
    }

    return relatorioPorcentagemFaturamento;
}


console.table(relatorioFaturamento(faturamento));