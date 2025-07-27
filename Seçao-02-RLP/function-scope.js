// Anotações: 
// let e const geram escopo escopo de bloco.
// var gera escopo de função.  
 
let n = "Global" // Escopo Global!

function mostrarN() {
  let n1 = "Escopo local - Função" // "Escopo local dentro da função!"
  
  if(true) {  // Escopo de bloco dentro da função!
     var n2 = "Escopo de bloco."
   }
   console.log("Escopo local dentro da função:", n1)
   console.log("Escopo de bloco do if dentro da função:", n2)
 }  

mostrarN()

console.log("Valor de n no escopo global: " + n)


// Funções aninhadas. 
function fnExt() {
   let n = "Varivel n local na função fnExt"

   function fnInt() {
      let n = "Variavel n local na função fnInt"
      console.log(n)
   }
   fnInt()
   console.log(n)
}

fnExt()
