const escola = 'Cod3r'

console.log(escola.charAt(4)) // Pegará a letra no índice 4.
console.log(escola.charAt(5)) // Retornará vazia.
console.log(escola.charCodeAt(3)) // Pegará da tapela ASCII ou Unicode.
console.log(escola.indexOf('3')) // Retornar o indice associado ao digito 3.

console.log(escola.substring(1)) // Na tela só irá aparecer do indice escolhido "od3r", tirando o indice 0.
console.log(escola.substring(0, 3)) // Começa do indice 0 até o indice 3 (sem inclui-lo) "Cod".

console.log('Escola '.concat(escola).concat("!")) // Concatenação de strings.
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) // substitui alguma letra, número que deseja por outra.

console.log('Ana, Maria, Pedro'.split(',')) // Passará a string para um Array com o separador ',' definido.