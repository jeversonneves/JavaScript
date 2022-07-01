function valor(value) {
    value = `R$ ${value.toFixed(2).toString().replace('.',',')}`
    console.log(value)
}

valor(0.1 + 0.2)