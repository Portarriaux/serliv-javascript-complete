// Criar um array com numeros randomicos não repetidos. 

function generateRandomInteger(max) {
   return parseInt(Math.random() * max)

}

let arr = []
let i = 0

while(arr.length <= 20) {
   i++
   let randomNumber = generateRandomInteger(30)

   if(arr.indexOf(randomNumber) < 0) {
      arr.push(randomNumber)
   }
   else {
      console.log(randomNumber, "Já existe no array")
   }

   
}

console.log(arr)
console.log("lop", i)