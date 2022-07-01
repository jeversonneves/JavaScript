function jurosSimples(capitalInicial, taxa, tempo) {
    montante = capitalInicial + (capitalInicial * taxa * tempo)
    return montante.toFixed(2)
}

function jurosCompostos(c, i, t) {
    montante = c * (1 + i) ** t
    return montante.toFixed(2)
}

console.log(jurosSimples(100, 10/100, 2))
console.log(jurosCompostos(100, 10/100, 2))