const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

console.log(ferrari.prototype) // retorna undefined
console.log(ferrari.__proto__) // retorna {}
console.log(ferrari.__proto__ === Object.prototype) // retorna true
console.log(volvo.__proto__ === Object.prototype) // retorna true
console.log(Object.prototype.__proto__ === null) // retorna true

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto) // retorna function function
console.log(Object.prototype, MeuObjeto.prototype) // retorna {} MeuObjeto {}
