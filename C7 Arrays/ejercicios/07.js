function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort((a, b) => String(a).localeCompare(b))}

module.exports = ordenarArray;
