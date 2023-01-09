// ES7

const potencia = 2**3
console.log(potencia) // 8

// includes

let numbers = [1,2,3,4,5,64,43,235,6,55,4,32,432,423]

console.log(numbers.includes(9));
console.log(numbers.includes(6));

const saludo = "Hola mundo"

saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true


// Utilizando arrays
const frutas = ["manzana", "pera", "piña", "uva"]

frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true
