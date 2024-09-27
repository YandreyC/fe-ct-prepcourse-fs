function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let repetido = null
  for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
      if (numeros[i] === numeros[j]) {
        repetido = numeros[i]
        return repetido // Devuelve el elemento repetido
      }
    }
  }
  return repetido !== null ? repetido : undefined // Devuelve undefined si no se encontró ningún elemento repetido
}

module.exports = encontrarElementoRepetido;