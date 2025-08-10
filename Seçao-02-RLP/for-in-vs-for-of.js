// Estruturas de Repetição em JavaScript: for, for...in, for...of e forEach

/* FOR
O for tradicional é um dos loops mais antigos e flexíveis. É ideal quando você precisa de controle total sobre o processo de iteração, 
incluindo o índice, a condição de parada e o passo de incremento.
Quando usar:
- Quando a iteração depende de um índice numérico.
- Quando precisamos de um controle preciso sobre o início, a condição e o final do loop. */

const arr = ["maçã", "banana", "uva"];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]); // Acessa o valor pelo índice
}

/* FOR...IN 
O for in foi projetado para iterar sobre as chaves (ou índices) de um objeto. 
Ele percorre todas as propriedades enumeráveis do objeto, incluindo as herdadas.
Quando usar:
- Para iterar sobre as propriedades de um objeto simples.
- Quando você precisa acessar as chaves de um objeto para, por exemplo, pegar os valores correspondentes (objeto[chave]).
*/

const carro = {
   marca: "Toyota",
   modelo: "Corolla",
   ano: 2023
};

for (let chave in carro) {
   console.log(`A propriedade "${chave}" tem o valor "${carro[chave]}"`);
}

/* FOR..OF
O for...of foi introduzido no ES6 e foi feito para iterar diretamente sobre os valores de um objeto iterável.
Objetos iteráveis incluem Arrays, Strings, Maps, Sets, entre outros.
Quando usar:
- Para iterar sobre os valores de coleções como arrays e strings.
- Quando você não precisa do índice, apenas do valor de cada item.
*/

const frutas = ["Maçã", "Banana", "Uva"];
for (const fruta of frutas) {
   console.log(fruta);
}

/* FOREACH()
O FoEach é um método de Array de alta ordem que execua uma função de callback em cada elemento do array. 
É uma forma mais moderna declarativa de fazer loops, tornando o código mais limpo.
Quando usar:
- Sempre que precisa iterar sobre os elementos de um array
- Quando a iteração não precisa ser interrompida (break) ou pulada (continue).
*/

const arr1 = ["a", "b", "c"];

arr1.forEach((valor, indice) => {
   console.log(`O valor é ${valor} e o índice é ${indice}`);
});

