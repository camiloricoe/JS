//arrays destructuring

let fruits = ['Apple', 'Banana']
let [a,b]= fruits

console.log(a, fruits[0]);


// object destructuring

var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }
//antes
var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre)  // 'Andres'
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'


//ahota
const { nombre, edad, plataforma } = usuario

console.log(nombre)  // 'Andres'
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'



// spread operator

// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
let nums = [1,2,3,4,5]
const otherArray = [ ...nums]   //[ 'H', 'o', 'l', 'a' ]


//Cómo copiar arrays utilizando el operador de propagación
const originalArray = [1,2,3,4,5];
const copyArray = [...originalArray];
copyArray[0] = 0;

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false

//Cómo unir arrays y añadir elementos con el operador de propagación
const array1 = [1,2,3];
const number = 4;
const array2 = [5,6,7];

const otherArray2 = [ ...array1, number, ...array2 ];

otherArray2 // [1,2,3,4,5,6,7]


var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }
let country = 'CO';

let data = {id: 1, ...usuario, country};
console.log(data);


//Parámetro rest
function hola (primero, segundo, ...resto) {
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5,6]
}

hola(1,2,3,4,5)


// También sirve para obtener los elementos restantes de un array u objeto usando desestructuración
const objeto = {
  nombre: "Andres",
  age: 23,
  plataforma: "Platzi"
}
const array4 = [0,1,2,3,4,5]

const {plataforma, ...usuario} = objeto
const [cero, ...positivos] = array4

usuario // { nombre: 'Andres', age: 23 }
positivos // [ 1, 2, 3, 4, 5 ]