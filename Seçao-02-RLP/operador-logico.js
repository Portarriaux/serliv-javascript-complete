// ADN(&&): Quando as duas exprssões são verdadeiras. 
// 0r(||): Quando temos duas expressões e uma é verdadeira, já valida o restante.
// NOT(!):

/* 
   * Para uma pessoa viajar pra o exterior precisa:
   - Precisa ser maior que de 18 anos
   OU
   Acompanhado com os pais. 
   Ter comprado o bilhete.
*/

let idade = 21
let paisPresentes = false
let comprouBilhete = false
let podeViajar = idade >= 18 || paisPresentes && comprouBilhete

console.log(`Pode viajar: ${podeViajar}` )
