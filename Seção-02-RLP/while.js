// todo: EXEMPLOS COM WHILE.
// let senhaCorreta = "secreta123";
// let senhaDigitada;

// Usando o módulo 'readline-sync' para simular input do usuário no console
// Se você estiver no navegador, pode usar 'prompt()'
// const readline = require('readline-sync'); // Importa a biblioteca para ler input

// do {
//   senhaDigitada = readline.question("Digite a senha: "); // Pede a senha
//   if (senhaDigitada !== senhaCorreta) {
//     console.log("Senha incorreta. Tente novamente.");
//   }
// } while (senhaDigitada !== senhaCorreta); // Continua enquanto a senha for diferente da correta

// console.log("Senha correta! Acesso concedido.");

/*
Possível interação no console:
Digite a senha: 123
Senha incorreta. Tente novamente.
Digite a senha: abc
Senha incorreta. Tente novamente.
Digite a senha: secreta123
Senha correta! Acesso concedido.
*/

//---------------------------------------------------------------------------------------------

// todo: EXEMPLOS COM DO WHILE
// let y = 0;
// do {
//    console.log("Este texto séra impresso UMA VEZ")
// } while(y < 5) {
//    console.log("Passou pelo do... while")
// }

//---------------------------------------------------------------------------------------------

// todo: EXEPLOS COM BREAK E CONTINUE.

// ? Cenário: Queremos iterar uma sequência de números para encontrar o primeiro número PAR. WHILE COM(BREAK)
/* let numero = 1;
while( numero <= 10) { // O loop deveria ir até 10.
   if(numero % 2 === 0) {
      console.log(`Encontrei o primeiro número par: ${numero}`)
      break; <- (Sai do loop imediatamente.)
   }

   console.log(`Testando número impar ${numero}`)
   numero++

} */

// ? Cénario: Queremos imprimir números de 1 a 10, mas pular todos os números que são múltiplos de 3. WHILE COM.(CONTINUE)

/* let contador = 0; 

while(contador < 10) {
   contador++ // ! Importante incrementar ANTES ou ter muito cuidado para não gerar loop infinito.

   if(contador % 3 === 0) {
      console.log(`Pulando o número: ${contador}`)
      continue; // Pula o restante do bloco e vai para a proxíma iteração
   }

   console.log(`Processando número: ${contador}`)
}

console.log("Loop while finalizado.") */

// ? Break com do...while. 

// const readline = require('readline-sync')
// const numeroSecreto = 7;
// let tentativa;

/* do {
   tentativa = parseInt(readline.question("Adivinhe o número secreto (1-10) ou digite '0' para sair: "))
   if (tentativa === numeroSecreto) {
      console.log("Parabéns! Você acertou o número.")
      break
   } else if (tentativa === 0) {
      console.log("Você desistiu. O número secreto era " + numeroSecreto + ".")
      break;
   } else {
      console.log("Número incorreto. Tente novamente.")
   }

} while (true)

console.log("Fim do jogo de adivinhação!") */



/* onst readline = require('readline-sync');
let numeroDigitado;

console.log("\n--- Exemplo de 'continue' com 'do...while' ---");
do {
    numeroDigitado = parseInt(readline.question("Digite um número positivo: "));

    if (isNaN(numeroDigitado) || numeroDigitado <= 0) { // Verifica se não é um número ou não é positivo
        console.log("Entrada inválida. Por favor, digite um número maior que zero.");
        continue; // <-- Pula o restante do código e volta para o 'do'
    }
    // Se chegou aqui, o número é válido
    console.log(`Você digitou um número válido: ${numeroDigitado}`);

} while (true); // Loop infinito, dependemos do 'break' para sair (que será adicionado)
 */
// Para este exemplo fazer sentido, precisamos de um 'break' para sair quando for válido
// Caso contrário, ele sempre pediria um novo número após um válido ser digitado.
// Vamos ajustar para sair ao encontrar um número válido:

// --- Versão Aprimorada com 'break' e 'continue' ---
/* console.log("\n--- Exemplo Aprimorado com 'break' e 'continue' ---");
do {
    numeroDigitado = parseInt(readline.question("Digite um número positivo (ou '0' para sair): "));

    if (isNaN(numeroDigitado) || numeroDigitado < 0) {
        console.log("Entrada inválida. Por favor, digite um número positivo.");
        continue; // Pula para a próxima iteração se for inválido
    }

    if (numeroDigitado === 0) {
        console.log("Saindo...");
        break; // Sai do loop se o usuário digitar 0
    }

    // Se chegou aqui, o número é válido e não é 0
    console.log(`Você digitou um número válido: ${numeroDigitado}`);
    break; // Sai do loop porque um número válido foi digitado
    
} while (true);

console.log("Processo de entrada de dados finalizado."); */

let i = 5;
console.log("Variável i:", i);
console.log("Array com i:", [i]);
