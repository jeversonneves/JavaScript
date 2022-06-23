const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // Verifica se é um número inteiro.
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // toFixed serve para definir a quantidade de casas decimais.
console.log(media.toString()) // Retonar o valor como String.
console.log(media.toString(2)) // Colocando entre os parenteses do toString(2) Converte o valor para Binario.
console.log(typeof media) // tipo do dado.
console.log(typeof Number) // Number é uma função.