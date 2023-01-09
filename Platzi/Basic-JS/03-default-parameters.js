function sumar(number1, number2){
return number1 + number2
}

sumar(3,4) // 7
sumar(3)   // NaN
sumar()    // NaN

function sumar(number1, number2){
var _number1 = number1 || 0
var _number2 = number2 || 0

return _number1 + _number2
}

sumar(3,4) // 7
sumar(3)   // 3
sumar()    // 0


function sumar(number1 = 0, number2 = 0){
return number1 + number2
}

sumar(3,4) // 7
sumar(3)   // 3
sumar()    // 0
