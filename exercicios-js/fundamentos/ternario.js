const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

/* Ternário é representado por três partes:
 * nota >= 7 ? 'Aprovado' : 'Reprovado'
 * Primeira parte: expressão.
 * Segunda parte: True (verdadeira)
 * Terceira parte: False (falsa).
*/

console.log(resultado(7.1))
console.log(resultado(6.7))
console.log(resultado(10))