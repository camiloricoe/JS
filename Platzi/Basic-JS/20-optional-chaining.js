const usuario = {}
console.log(usuario.redes) // undefined

console.log(usuario.redes.facebook) 
// TypeError: Cannot read properties of undefined (reading 'facebook')

console.log(usuario.redes?.facebook) 
// undefined