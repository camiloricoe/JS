// 🔽 Baja legibilidad
const numero1 = 3501548945
console.log( numero1 ) // 3501548945

// ✅ Alta legibilidad
const numero2 = 3_501_548_945
console.log( numero1 ) // 3501548945


const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

mensaje.replace("JavaScript", "Python")
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'

mensaje.replaceAll("JavaScript", "Python")
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'

mensaje.replaceAll(/a/g, "*")
// 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'