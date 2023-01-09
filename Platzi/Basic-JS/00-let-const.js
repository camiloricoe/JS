var lastName = 'David';
lastName = 'Oscar'
console.log(lastName);


let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat'; // const no se puede reasignar
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple'
        let fruit2 = 'Kiwi'
        const fruit3 = 'Banana'
    }
    console.log(fruit1);
    console.log(fruit2); // let es de una variable de bloque
    console.log(fruit3); // const es de una variable de bloque


}

{
var nameVar = "soy var"
let nameLet = "soy let"
}

console.log(nameVar) // 'soy var'
console.log(nameLet) // ReferenceError: nameLet is not defined

fruits();

