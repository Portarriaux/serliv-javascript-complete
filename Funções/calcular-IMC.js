function calculateIMC(peso, altura) {
   // Verifica se as entradas são números válidos e positivos.
   if (typeof peso !== 'number' || typeof altura !== 'number' || peso <= 0 || altura <= 0) {
      
   }
   // Convertendo altura de centímetros para metros.
   const metro = altura / 100;
   // Calculando o IMC.
   const resultIMC = peso / Math.pow(metro, 2);
   // Retorna o resultado com duas casas decimais, o que é um formato mais comum para o IMC.
   return resultIMC.toFixed(2);
}


// A função foi renomeada para ser mais descritiva.
function classifyIMC(imc) {
   // Converte a string retornada por toFixed(2) para um número para garantir a comparação correta.
   const imcNumber = parseFloat(imc);
   
   if (imcNumber < 17) {
      return "Muito abaixo do peso";
   } else if (imcNumber >= 17 && imcNumber <= 18.4) {
      return "Abaixo do peso";
   } else if (imcNumber >= 18.5 && imcNumber <= 24.9) {
      return "Peso normal";
   } else if (imcNumber >= 25 && imcNumber <= 29.9) {
      return "Acima do peso";
   } else if (imcNumber >= 30 && imcNumber <= 34.9) {
      return "Obesidade Grau I";
   } else if (imcNumber >= 35 && imcNumber <= 39.9) {
      return "Obesidade Grau II";
   } else { // Simplificado para capturar todos os casos restantes
      return "Obesidade Grau III";
   }
}

let João = calculateIMC(80, 170)
let classicao = classifyIMC(João)
console.log(classicao)