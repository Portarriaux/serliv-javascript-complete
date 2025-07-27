/* 
   Percorrendo Propriedades de Objetos com for...in
   O loop for...in é uma ferramenta específica do JavaScript
   para iterar (percorrer) as propriedades enumeráveis de um objeto. 
*/

const pessoa = {
   nome: "Maria",
   idade: 28,
   email: "maria@gmail.com"
}

for(let prop in pessoa) {
   // console.log(prop)
   console.log(pessoa[prop])
}