function triangulo(a, b, c) {
    if ((a === b) && (b === c)) {
        console.log('Triângulo EQUILÁTERO')
    } else if ((a != b) && (b != c) && (a != c)) {
        console.log('Triângulo ESCALENO')
    } else {
        console.log('Triângulo ISÓSCELES')
    }
}

triangulo(2, 2, 2)
triangulo(2, 3, 3)
triangulo(2, 3, 4)