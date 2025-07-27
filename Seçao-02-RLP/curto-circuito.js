// Regras curto circuito para &&: 
// let usuarioLogado = true;

//  Usando if tradicional
// if (usuarioLogado) {
//   console.log("Bem-vindo ao painel de controle!");
// }

// // Usando curto-circuito com &&
// usuarioLogado && console.log("Bem-vindo ao painel de controle!");


// Regras curto circuito para ||:
// let valorPreferencial = "Valor do usuário!"
// let valorPadrao = "Valor default!"
// let final1 = valorPreferencial || valorPadrao
// console.log(final1)


// function saudacao(nome) {
//    const nomeParasaudar = nome || "Visitante"
//    console.log(`Olá, ${nomeParasaudar}!`)
// }

// saudacao("Fernanda")
// saudacao(null)
// saudacao("")
// saudacao(0)
// saudacao(-0)


// false: O valor booleano false em si.

// Exemplo: if (false) { /* não executa */ }

// 0: O número zero.

// Exemplo: if (0) { /* não executa */ }

// "" ou '': Uma string vazia.

// Exemplo: if ("") { /* não executa */ }

// null: Representa a ausência intencional de qualquer objeto ou valor.

// Exemplo: if (null) { /* não executa */ }

// undefined: Indica que uma variável foi declarada, mas ainda não recebeu um valor, ou que uma propriedade de objeto não existe.

// Exemplo: let x; if (x) { /* não executa */ }

// NaN: "Not-a-Number" (Não é um Número). É o resultado de operações matemáticas inválidas.

// Exemplo: if (0 / 0) { /* não executa */ }


