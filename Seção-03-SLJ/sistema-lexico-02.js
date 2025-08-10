// - Sistema Léxico 
/* 
   * "use strict"
   * Tipagem dinâmica
   * Aspas simples ou duplas
   * Not a number
   * This dinâmico
   * Conversão implícita
*/


"use strict";
// Variável declarada sem 'var', 'let' ou 'const' causaria um erro.
// x = 10; 

let y = 20;
console.log(y);

let variavel = 10; // 'variavel' é do tipo number
variavel = "Olá";  // Agora 'variavel' é do tipo string
variavel = true;   // Agora 'variavel' é do tipo boolean

let nome1 = 'Johnny Clean';
let nome2 = "Gemini";

console.log(nome1);
console.log(nome2);

let resultado = 10 / "maçã"; // 'resultado' será NaN
console.log(resultado);

const pessoa = {
  nome: "De",
  saudar: function() {
    console.log("Olá, meu nome é " + this.nome); 
  }
};

pessoa.saudar(); // 'this' refere-se ao objeto 'pessoa'