'abc'.padStart(10) // "       abc"
'abc'.padStart(10, "foo") // "foofoofabc"
'abc'.padStart(6,"123465") // "123abc"
'abc'.padStart(8, "0") // "00000abc"
'abc'.padStart(1) // "abc"

'abc'.padEnd(10) // "abc       "
'abc'.padEnd(10, "foo") // "abcfoofoof"
'abc'.padEnd(6, "123456") // "abc123"
'abc'.padEnd(1) // "abc"


console.log("*".repeat(3));
console.log("a".padEnd(2, "*").padStart(3, "*"))
console.log("*".repeat(3));

// trailing-commas

const numbers = [1,2,3,4,,,,,]
console.log(numbers);