function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number' || numbers[i] <= 0) {
      return 'O array deve conter apenas números maiores que zero.';
    }
    sum += numbers[i];
  }

  let average = sum / numbers.length;
  return `The average of the numbers is ${average}`;
}

// Testando a função
console.log(calculateAverage([3, 4, 6])); // A saída será a média dos números
console.log(calculateAverage("teste")); // Vai retornar uma mensagem de erro
console.log(calculateAverage([3, -4, 6])); // Vai retornar erro porque tem número negativo
