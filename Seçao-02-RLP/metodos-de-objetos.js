const produto = {
   nome: "Caneta",
   qtd: 10,
   // Método 'comprar' usando uma função regular
   comprar: function(n) {
      // 'this' aqui se refere ao próprio objeto 'produto'
      // pois 'comprar' é chamado como um método de 'produto'.
      if (n > this.qtd) {
         return "Quantidade não disponível."
      } else {
         this.qtd -= n // Atualiza a propriedade 'qtd' do objeto 'produto'
      }
   },

   // Método 'teste1' usando uma função regular
   teste1: function() {
      console.log("Teste1");
      // Quando 'teste1' é chamado como 'produto.teste1()',
      // 'this' também se refere ao objeto 'produto'.
      console.log(this); // Saída: { nome: "Caneta", qtd: X, comprar: [Function], teste1: [Function], teste2: [Function] }
   },

   // Método 'teste2' usando uma arrow function
   teste2: () => {
      console.log("Teste2");
      // ATENÇÃO: Em uma arrow function, 'this' NÃO se refere ao objeto 'produto'.
      // Uma arrow function não tem seu próprio 'this' contexto.
      // Ela herda o 'this' do escopo léxico (do escopo onde foi definida).
      // Em ambientes de navegador (global), 'this' pode ser 'window'.
      // Em Node.js (global), 'this' pode ser um objeto vazio ou o módulo global.
      console.log(this); // Saída: Window (no navegador).
   }
}

// Exemplos de uso do método 'comprar'
produto.comprar(3); // Diminui 'qtd' para 7
console.log(`Quantidade após primeira compra: ${produto.qtd}`); // Saída: 7

produto.comprar(13); // Retorna "Quantidade não disponível." (mas não altera 'qtd')
console.log(`Quantidade após segunda compra: ${produto.qtd}`); // Saída: 7

// Chamando os métodos de teste para observar o 'this'
produto.teste1();
produto.teste2();