/* 
   * Objetos de primeira classe
   - Funções em javascript são tratadas como qualquer outro objeto.
   - Podem ser passadas como parâmetro para outras funções, chamamos de callback
   - Atribuídas em propiedades de objetos (métodos)
   - Retornadas como resultados de outras funções 
   - Podem ter suas próprias propiedades
*/

// ES5: única forma de definir escopo de variavéis.
function teste() {
   if(true) {
      var x = 10 }
   console.log(x)
}
console.log(teste())

// IIFE: Funções auto-invocáveis. 