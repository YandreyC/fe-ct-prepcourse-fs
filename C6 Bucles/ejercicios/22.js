function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let i = 1
  do{
    suma = num += 5
    i++
  }while(i<=8)
  return suma
}

module.exports = doWhile;