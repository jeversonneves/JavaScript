let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliarPontuacoes(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(', ') // colocará em um array uma lista ordenada.
    let qtdQuebraDeRecords = 0                    // quantidade de recordes iniciada com 0.
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]            // iniciando com o primeiro elemento
    let menorPontuacao = pontuacoes[0]            // iniciando com o primeiro elemento

    for (let i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        } else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i + 1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}

console.log(avaliarPontuacoes(stringPontuacoes))