// let pessoa = {nome: "João", idade: 30, email: "joão@gmail.com"}
// let pessoa1 = {nome: "Paulo", idade: 34, email: "paulo@gmail.com"}

// const grupo = [ pessoa, pessoa1]

const livros = [
  {
    titulo: "O Pequeno Príncipe",
    autor: "Antoine de Saint-Exupéry",
    anoPublicacao: 1943,
    genero: "Fábula"
  },
  {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    genero: "Romance"
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: 1949,
    genero: "Distopia"
  },
  {
    titulo: "A Metamorfose",
    autor: "Franz Kafka",
    anoPublicacao: 1915,
    genero: "Ficção Absurda"
  }
];

for( let i = 0; i < livros.length; i++) {
   console.log(livros[i].titulo)
}