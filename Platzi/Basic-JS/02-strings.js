var nombre = "Camilo"
var edad = 25
var mensaje = "Mi nombre es " + nombre + " y tengo " + edad + " años."

console.log(mensaje)
// 'Mi nombre es Camilo y tengo 25 años.'


var mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`

console.log(mensaje)
// 'Mi nombre es Camilo y tengo 25 años.'



//Plantilla multilínea

var mensaje = "Línea 1 \n" + "línea 2"

console.log(mensaje)
// 'Línea 1
// línea 2'

const mensaje = `Línea 1
línea 2`

console.log(mensaje)
// 'Línea 1
// línea 2'