class User {
    //Metodos
    greeting(){
        return 'Hello';
    }
};

const pepe =new User();
console.log(pepe.greeting()); // Hello


class Player {
constructor(nombre, colorSombrero){
        //atributos con su contexto
        this.nombre = nombre;
        this.colorSombrero = colorSombrero;
    }
    //Metodos
saludar(){
return `Hola soy ${this.nombre} y mi sombrero es ${this.colorSombrero}`;
    }
}
//Creacion de jugadores (Objetos)

let player1 =new Player('Mario','Rojo');
let player2 =new Player('Luigi', 'Verde');

console.log(player1);//Player {nombre: 'Mario', colorSombrero: 'Rojo'}
console.log(player1);////Player {nombre: 'Luigi', colorSombrero: 'Verde'}

//Llamar metodos de los jugadores (Objetos)

console.log(player1.saludar()); // Hola soy Mario y mi sombrero es Rojo


// Los metodos Get y Set nos permiten tener acceso a leer o modificar el atributo
// de un objeto. Siendo Get, para mostrar el nombre del atributo y Set, para modificar 
//ese atributo.En el ejemplo del juego:

class Player {
constructor(nombre, colorSombrero){
        this.nombre = nombre;
        this.colorSombrero = colorSombrero;
    }
    //Metodos
    saludar(){
        return `Hola soy ${this.nombre} y mi sombrero es ${this.colorSombrero}`;
        }
    getnombre(){
        return this.nombre;
        }
    setnombre(nuevoNombre){
            this.nombre = nuevoNombre;
        }
}

let player3 =new Player('Mario','Rojo');
//GET
console.log(player3.nombre); // Mario
//SET
player3.nombre = 'Alberto';
console.log(player3.nombre);// Alberto
player3.setnombre('Camilo')
console.log(player3.nombre);// Camilo


