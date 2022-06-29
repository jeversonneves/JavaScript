let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { 
    return 2 * a 
}

dobro = a => 2 * a // return está implícito.

console.log(dobro(5))
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => { return 'Olá' }

ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola()) // '_' possui um parâmetro.

