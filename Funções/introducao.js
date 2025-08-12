/* 
   Funções em JS.
   * São tipos de objetos com a icrivél capacidade de serem invocadas 
   * Podem ser Literais
   * Em alguns casos, ocorre o hoisting
   * São objetos de primeira classe
   * NO E5 funções são a única maneira de gerar escopo
   * Podem ser LIFE (Immediately Invoked Fuction Expression)
   * Podem ter prioridades internas como arguments e name.
 */

// Literais:
function minhaFunc() {
   // corpo da funcão
}

// Hoisting, capacidade do javascript de "içar" uma function declaration
teste()
function teste() {
   console.log("teste")
}
// teste()

// Hoisting não acontece com uma function expression

// teste1()
const teste1 = function teste() {
   console.log("expression")
}
// teste1()

