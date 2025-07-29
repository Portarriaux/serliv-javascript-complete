// --- Exemplo com Arrays (passagem por referência) ---
console.log("--- Exemplo com Arrays ---");

function alteraArray(a) {
  a.push("Adicionado");
  console.log("  Dentro da função (array):", a);
}

let meuArray = ["Item Inicial"];
console.log("Array antes:", meuArray); // Saída: ["Item Inicial"]

alteraArray(meuArray); // Chama a função, alterando o array original

console.log("Array depois:", meuArray); // Saída: ["Item Inicial", "Adicionado"]
console.log("Arrays são alterados fora da função (passagem por referência).\n");


// --- Exemplo com Tipos Primitivos (passagem por valor) ---
console.log("--- Exemplo com Tipos Primitivos ---");

function alteraPrimitivo(p) {
  p += " - Modificado";
  console.log("  Dentro da função (primitivo):", p);
}

let minhaMensagem = "Mensagem Original";
console.log("Mensagem antes:", minhaMensagem); // Saída: "Mensagem Original"

alteraPrimitivo(minhaMensagem); // Chama a função, mas só a cópia é alterada

console.log("Mensagem depois:", minhaMensagem); // Saída: "Mensagem Original"
console.log("Tipos primitivos NÃO são alterados fora da função (passagem por valor).");