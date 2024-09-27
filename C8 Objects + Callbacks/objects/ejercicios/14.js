function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return objetoUsuario !== undefined && objetoUsuario !== null && objetoUsuario.email !== undefined && typeof objetoUsuario.email === 'string' && objetoUsuario.email.trim() !== '';
}
  module.exports = tieneEmail;
