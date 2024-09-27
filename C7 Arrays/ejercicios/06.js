function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let arrayInvertido = []
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i])
    }
    return arrayInvertido
}

module.exports = invertirArray;
