/*
  =============================================================
  PASSAGEM POR REFERÊNCIA: OBJETOS (Arrays e Objetos)
  =============================================================

  - Arrays e objetos são passados por referência.
  - A função recebe o endereço de memória do objeto original.
  - Alterações dentro da função AFETAM o objeto fora dela.
*/

function alteraArray(arrayRecebido) {
  // `arrayRecebido` é uma referência ao `meuArray` original.
  arrayRecebido.push("Adicionado");
  console.log("  Dentro da função:", arrayRecebido); // Saída: ["Item Inicial", "Adicionado"]
}

let meuArray = ["Item Inicial"];
console.log("Array antes da função:", meuArray); // Saída: ["Item Inicial"]

alteraArray(meuArray); // Passamos a referência de `meuArray`.

// O array original foi alterado porque a função modificou o mesmo objeto na memória.
console.log("Array depois da função:", meuArray); // Saída: ["Item Inicial", "Adicionado"]

console.log("\n-------------------------------------------\n");


/*
  =============================================================
  PASSAGEM POR VALOR: TIPOS PRIMITIVOS
  =============================================================

  - Tipos primitivos (string, number, boolean, null, undefined) são passados por valor.
  - A função recebe uma CÓPIA do valor, não o endereço de memória.
  - Alterações dentro da função NÃO AFETAM o valor fora dela.
*/

function alteraPrimitivo(stringRecebida) {
  // `stringRecebida` é uma CÓPIA da `minhaMensagem`.
  stringRecebida += " - Modificado";
  console.log("  Dentro da função:", stringRecebida); // Saída: "Mensagem Original - Modificado"
}

let minhaMensagem = "Mensagem Original";
console.log("Mensagem antes da função:", minhaMensagem); // Saída: "Mensagem Original"

alteraPrimitivo(minhaMensagem); // Passamos uma CÓPIA do valor de `minhaMensagem`.

// A variável original não foi alterada, pois a função trabalhou apenas com a cópia.
console.log("Mensagem depois da função:", minhaMensagem); // Saída: "Mensagem Original"


console.log("\n-------------------------------------------\n");


/*
  =============================================================
  EXEMPLO COM OBJETOS (PASSAGEM POR REFERÊNCIA)
  =============================================================

  - Segue a mesma lógica dos arrays, pois objetos também são passados por referência.
*/
let person = { name: "Paul", status: "unemployeed"};

function getAjob(personRef) {
  // `personRef` é uma referência ao objeto `person` original.
  personRef.status = "employeed";
  // A alteração no status é feita no objeto original.
  return personRef; // Retorna a referência alterada.
}

const newPerson = getAjob(person);

// O objeto original foi alterado.
console.log("Objeto original:", person);   // Saída: { name: "Paul", status: "employeed"}
// A nova variável aponta para o mesmo objeto alterado.
console.log("Nova variável:", newPerson); // Saída: { name: "Paul", status: "employeed"}