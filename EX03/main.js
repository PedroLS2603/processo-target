const dados = require('./dados.json');
/* Cálcula média dos valores ignorando os dias com faturamento nulo*/
function calculaMedia(dados) {
    let mediaMensal = 0;
    let diasFuncionamento = 0;
    
    for(let i = 0; i < dados.length; i++) {
        const dia = dados[i];
    
        if(dia.valor > 0) {
            diasFuncionamento++;
            mediaMensal += dia.valor;
        }
    }
    
    return mediaMensal /= diasFuncionamento;    
}

/* Encontra o menor valor de faturamento ignorando os dias com faturamento nulo */
function encontraMenorValor(dados) {
    let menorValor = 0;
    for(let i = 0; i < dados.length; i++) {
        const dia = dados[i]

        if(i == 0 || (dia.valor < menorValor && dia.valor > 0)) {
            menorValor = dia.valor;
        }
    }

    return menorValor;
}

/* Encontra o maior valor de faturamento */
function encontraMaiorValor(dados) {
    let maiorValor = 0;
    for(let i = 0; i < dados.length; i++) {
        const dia = dados[i]

        if(i == 0 || dia.valor > maiorValor) {
            maiorValor = dia.valor;
        }
    }

    return maiorValor;
}

/* Calcula a quantidade de dias com faturamento maior que a média mensal */
function diasMaisAltoQueMedia(media) {
    let qtdDiasMaisAltoQueMediaFaturamento = 0;
    for(let i = 0; i < dados.length; i++) {
        const dia = dados[i];
        if(dia.valor > media) {
            qtdDiasMaisAltoQueMediaFaturamento++;
        }
    }

    return qtdDiasMaisAltoQueMediaFaturamento;
}

/* Constrói o relatório de faturamento */
function relatorioFaturamento(dados) {
    const mediaMensal = calculaMedia(dados);
    const menorValor = encontraMenorValor(dados)
    const maiorValor = encontraMaiorValor(dados);
    const qtdDiasMiasAltoQueMedia = diasMaisAltoQueMedia(mediaMensal);
    
    const relatorioFaturamento = {
        media: `R$${mediaMensal}`,
        menorFaturamento: `R$${menorValor}`,
        maiorFaturamento: `R${maiorValor}`,
        qtdDiasComFaturamentoMaiorQueMedia: qtdDiasMiasAltoQueMedia 
    }

    return relatorioFaturamento;
}


console.table(relatorioFaturamento(dados));
