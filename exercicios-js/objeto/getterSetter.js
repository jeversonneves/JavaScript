const sequencia = {
  _valor: 1, // convenção
  get valor() { return this._valor++ },
  set valor(valor) { 
    if (valor > this._valor) {
        this._valor = valor
    }
  }
}

console.log(sequencia.valor, sequencia.valor) // retorno: 1 2
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor) // retorno: 1000 1001
sequencia.valor = 900 // ignoro por conta do valor ser menor do que se encontra.
console.log(sequencia.valor, sequencia.valor) // retorno: 1002 1003
