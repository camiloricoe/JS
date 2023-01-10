function* generator(){
yield 1
yield 2
yield 3
}

const generador = generator()

generador.next().value //1
generador.next().value //2
generador.next().value //3
generador.next() // {value: undefined, done: true}


function* idMaker() {
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2


//async generator ES9

async function* anotherGenerator() {
  yield await Promise.resolve(1)
  yield await Promise.resolve(2)
  yield await Promise.resolve(3)
}

const generador2 = anotherGenerator()
generador2.next().then(respuesta => console.log(respuesta.value))
generador2.next().then(respuesta => console.log(respuesta.value))
generador2.next().then(respuesta => console.log(respuesta.value))
console.log('Hello');