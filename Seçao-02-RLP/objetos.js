// Acessando Elementos em Arrays (Listas)
const nomes = ["Daniel", "Maria", "João"];
const idade = [40, 28, 35];

// Acessa o primeiro elemento de 'nomes' e 'idade' usando o índice (posição) 0.
console.log(nomes[0], idade[0]); // Saída: Daniel 40

// Sintaxe Formal (usando new Object())
const pessoa = new Object();

// Adiciona propriedades (chave = valor) ao objeto 'pessoa'.
pessoa.nome = "Daniel";
pessoa.idade = 40;

// Exibe o objeto completo.
console.log(pessoa); // Saída: { nome: 'Daniel', idade: 40 }

// Acesso dinâmico de propriedade:
// Usamos colchetes quando o nome da propriedade está em uma variável ou é desconhecido.
let prop = "idade";
console.log(pessoa[prop]); // Saída: 40 (acessa a propriedade 'idade' através da variável 'prop')

// Sintaxe Literal (usando {}) - A Mais Comum e Recomendada!
// Cria um objeto 'pessoa' já com as propriedades 'nome' e 'idade' definidas.
const pessoa = {
   nome: "Daniel",
   idade: 40
};

// Exibe o objeto completo.
console.log(pessoa); // Saída: { nome: 'Daniel', idade: 40 }

// Acesso direto de propriedade:
// Usamos o ponto (.) quando o nome da propriedade é fixo e conhecido.
console.log(pessoa.nome); // Saída: Daniel

