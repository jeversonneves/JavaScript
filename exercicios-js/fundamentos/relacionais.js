console.log('01)', '1' == 1) // == comparação de valor e não se preocupa com o tipo.
console.log('02)', '1' === 1) // === é estritamente igual, se preocupa com o tipo.
console.log('03)', '3' != 3) // != é diferente de três, não se preocupa com o tipo.
console.log('04)', '3' !== 3) // !== é estritamente diferente, se preocupa com o tipo.

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // '0' (zero) significa data de referencia no Javascript (01/01/1970).
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime()) // Tem o mesmo tipo e o mesmo valor. True

console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false
