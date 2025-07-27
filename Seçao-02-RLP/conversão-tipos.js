// Conversão de tipos númericos:  ParseFloat, parseInt, Number()

// parseInt
let n1 = "10"
n1 = parseInt(n1)
let n2 = 2
console.log(n1 + n2, ": ", typeof n1, typeof n2)


// parseFloat
let n3 = 10.54636
n1 = parseFloat(n1)
let n4 = 2
console.log(n3 + n4, ": ", typeof n1, typeof n2)

// parseInt
// Retira os caracteres string e deixa apenas o numero tanto ParseInt/ParseFloat.
// Caso a string vier antes do número a conversão não será feita, retornando um NaN
let n5 = "12dhhhghghgh"
n5 = parseInt(n5)

let n6 = 2;
console.log(n5 + n6, ": ", typeof n5, typeof n6, "N5: ", n5)

// Number:
let n7 = "14"
n7 = Number(n7)

let n8 = 2;
console.log(n7 + n8, ": ", typeof n7, typeof n8, "N7: ", n7)

// Conversão tipo String:
let n9 = 10
n9 = n9.toString()
console.log(n9, typeof n9)

