function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo() // false.
seForVerdadeEuFalo(null) // false.
seForVerdadeEuFalo(undefined) // false.
seForVerdadeEuFalo(NaN) // false.
seForVerdadeEuFalo('') // string vazia é false.
seForVerdadeEuFalo(0) // único numero que é falso.
seForVerdadeEuFalo(-1) // True (verdadeiro).
seForVerdadeEuFalo(' ') // True porque é uma string com espaço em branco.
seForVerdadeEuFalo('?') // Também é verdade.
seForVerdadeEuFalo([]) // Array vazio também é verdade.
seForVerdadeEuFalo([1, 2]) // Array com elemento também é verdade.
seForVerdadeEuFalo({}) // Objeto vazio também é verdade.