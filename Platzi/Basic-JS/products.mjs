import fetch from "node-fetch";

//const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
//const response = await fetch('https://api.escuelajs.co/api/v1/products');
const response = await fetch('https://api.github.com/users/github');
const products = await response.json();

export { products };