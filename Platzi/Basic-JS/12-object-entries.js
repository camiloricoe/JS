const usuario = {
    name: "Andres",
    email: "andres@correo.com",
    age: 23
}

Object.entries(usuario)
/*
[
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
]
*/

Object.keys(usuario)
// [ 'name', 'email', 'age' ]

Object.values(usuario)
// [ 'Andres', 'andres@correo.com', 23 ]


// y al reves seria:
const arrayEntries = [
  [ 'name', 'Andres' ],
  [ 'email', 'andres@correo.com' ],
  [ 'age', 23 ]
] 

const usuario2 = Object.fromEntries(arrayEntries) 

console.log(usuario2)
/* {
  name: 'Andres',
  email: 'andres@correo.com',
  age: 23
}
*/