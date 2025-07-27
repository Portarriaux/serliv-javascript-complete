/* O for é uma ferramenta essencial em JavaScript para repetir uma ação várias vezes. Quando você tem uma lista de
 itens (um array), como a lista de nomes abaixo, o for permite que você acesse cada item um por um, do início ao fim.
 */

const nomes = ["João", "Maria", "Jose", "Helena"]

for(let i = 0; i < nomes.length; i++) {
   console.log(`${i} nome é ${nomes[i]}`)
}