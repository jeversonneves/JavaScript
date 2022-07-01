function baseExpoente(base, expoente) {
    let resultado = base ** expoente
    return resultado
}

function expoente(base, expoente) {
    let resultado = Math.pow(base, expoente)
    return resultado
}


console.log(baseExpoente(2, 3))
console.log(expoente(5, 2))