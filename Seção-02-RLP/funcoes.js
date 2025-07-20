// ? expressao de função:
// const ola2 = function () {
//    console.log("Function expresssion")
// }
// ola2()

// ? Arrow functions
// const ola3 = () => {
//    console.log("Arrow Functions")
// }
// ola3()

// ? Retorno de valores
// function obtemDiaSemana() {
//    return  new Date().getDay();

// }

// let dia = obtemDiaSemana()
// console.log(dia)


// ? Função que recebe parâmetros
function sum(a = 0, b = 0) {
   return a * b
}

console.log(sum(5))