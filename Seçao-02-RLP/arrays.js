// 1. Criando um array vazio usando o construtor.
const arr = new Array();

// 2. Adicionando elementos ao array posteriormente.
arr[0] = "Daniel";
arr[1] = 40;

// Exemplo de um array inicializado com diferentes tipos de dados.
const arr2 = new Array(true, "Daniel", 28, new Array(2, 4, 10));

// Criando e inicializando um array com a sintaxe literal.
const arr3 = ["Daniel", 40, [10, 20, 30, 40], true];

// Acessando um elemento aninhado no array.
// arr3[2] acessa o array interno [10, 20, 30, 40].
// [arr3[2].length - 1] acessa o último elemento desse array interno.
console.log(arr3[2][arr3[2].length - 1]); // Saída: 40

// Adicionando um novo elemento ao array.
// Se o índice não existir, ele será adicionado.
// Se o índice já existir, o valor será atualizado.
arr3[4] = "Novo valor";

// Exibindo o array completo após a modificação.
console.log(arr3); // Saída: ["Daniel", 40, [10, 20, 30, 40], true, "Novo valor"]