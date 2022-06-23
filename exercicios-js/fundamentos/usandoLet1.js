let numero = 1
{
    let numero = 2 // Variável Let estará visível dentro do bloco por conta de está em scopo diferente.
    console.log('dentro =', numero)
}

console.log('fora =', numero)