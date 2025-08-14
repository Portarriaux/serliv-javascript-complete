/* 
   - Funções de primeira classe
   * Atribuição de função a uma varivel 
   * Passar uma função comoa rgumento para outra função 
   * Retornar uma função de outra função
   * Armazenar funções em estruturas de dados com objetos e arrays.
*/

// Criamos uma função de saudação
function saudar(nome) {
   console.log(`Olá, ${nome}`)
}
// Criamos uma função de despedida
function despedir(nome) {
   console.log(`Até logo, ${nome}`)
}

// Essa é a nossa função "motor". Ela recebe um nome e uma função como argumento.
function executarAcao(nome,acao) {
   // Aqui, a função "acao" é chamada, agindo sobre o nome fornecido.
   acao(nome)
}

// Usando o "Motor" com a função "saudar"
executarAcao("Pedro", saudar) 
executarAcao("Ana", despedir)