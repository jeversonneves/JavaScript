cosnt pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa)) // return: [ 'nome', 'idade', 'peso' ] pega as chaves do objeto.
console.log(Object.values(pessoa)) // return: [ 'Rebeca', 2, 13 ] pega os valores do objeto.
console.log(Object.entries(pessoa)) // return: [ [ 'nome', 'Rebeca' ]. [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${e[0]}: ${e[1]}`)
})

/*
Return:
nome: Rebeca
idade: 2
peso: 13
*/


Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writeable: false,
  value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

/*
Return:
nome: Rebeca
idade: 2
peso: 13
01/01/2019
*/

console.log(Object.keys(pessoa)) // return: [ 'nome', 'idade', 'peso', 'dataNascimento' ]

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const 02 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // Ele irá concatenar no primeiro parâmetro 'dest' no caso, os demais objetos que passei 'o1' e 'o2'.

Object.freeze(obj)
obj.c = 1234
console.log(obj) // return: { a: 4, b: 2, c: 3 }
