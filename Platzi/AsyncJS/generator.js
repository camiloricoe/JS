function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}
const it = iterate(["oscar", "omar", "ana", "lucia", "juan"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


//reto 
const API = 'https://api.escuelajs.co/api/v1';
const urlApi = API;

//Declaración de fetchData como la función del Generador
async function* fetchData(url) {
	const response = await fetch(url);
	yield await response.json();
}

//Llamadas con el método next() en el objeto del Generador usando .then() y manipulando value y done
fetchData(`${urlApi}/products`).next().then(({ value, done }) => {
	console.log(value); //Imprime la lista de los Productos de la API
	
	const idProduct =value[0].id; //Extrae el id del producto que queremos manipular
 	
	console.log(`Copiame: ${urlApi}/products/${idProduct} y pegame en el navegador`);
	
	fetchData(`${urlApi}/products/${idProduct}`).next().then(({ value, done }) => {
        	
		console.log(value.title); //Imprime el Título del producto solicitado
        
		const idCategory = value.category.id;
        
fetchData(`${urlApi}/categories/${idCategory}`).next().then(({ value, done }) => {
           
			console.log(value.name); //Imprime el nombre de la categoría del producto seleccionado
        	});
    	});
});