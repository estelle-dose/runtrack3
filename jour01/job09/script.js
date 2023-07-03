function tri(numbers, order) {
  var numbersCopy = numbers.slice(); // Copie du tableau numbers
  if (order === "asc") {
    return triAscendant(numbersCopy);
  } else if (order === "desc") {
    return triDescendant(numbersCopy);
  } else {
    console.log("Paramètre 'order' invalide. Veuillez utiliser 'asc' ou 'desc'.");
    return numbers;
  }
}
  
  function triAscendant(numbers) {
    for (var i = 0; i < numbers.length - 1; i++) {
      for (var j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[i]) {
          var temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
    return numbers;
  }
  
  function triDescendant(numbers) {
    for (var i = 0; i < numbers.length - 1; i++) {
      for (var j = i + 1; j < numbers.length; j++) {
        if (numbers[j] > numbers[i]) {
          var temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
    return numbers;
  }
  
  var numbers = [7, 2, 9, 1, 5];
  console.log(tri(numbers.slice(), "asc")); // Affiche [1, 2, 5, 7, 9]
  console.log(tri(numbers.slice(), "desc")); // Affiche [9, 7, 5, 2, 1]
  
  

