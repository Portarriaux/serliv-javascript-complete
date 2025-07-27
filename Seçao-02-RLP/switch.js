// Exemplo com if
// let diaSemana = 3

// if (diaSemana === 0) {
//    console.log("Hoje é domingo!")
// } else if (diaSemana == 1) {
//    console.log("Hoje é segunda")
// } else if (diaSemana == 2) {
//    console.log("Hoje é Terça")
// } else if (diaSemana == 3) {
//    console.log("Hoje é Quarta")
// } else if (diaSemana == 4) {
//    console.log("Hoje é Quinta")
// } else if (diaSemana == 5) {
//    console.log("Hoje é Sexta")
// } else if (diaSemana) {
//    console.log("Hoje é Sábado")
// }


let diaSemana = 1

switch (diaSemana) {
   case 0:
      dia = "Domingo"
      break;

   case "1":
      dia = "Segunda"
      break;

   case 2:
      dia = "Terça"
      break;

   case 6:
      dia = "Sábado"
      break;

   default:
      dia = "----"

}

console.log(`Hoje é ${dia}`)
