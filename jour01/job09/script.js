function tri(numbers, order) {
    if (order === "asc") {
        return triAscendant(numbers);
    } else if (order === "desc") {
        return triDescendant(numbers);
    } else {
        console.log("Paramètre 'order' invalide. Veuillez utiliser 'asc' ou 'desc'.");
        return numbers;
    }
}

// Fonction de tri ascendant
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

// Fonction de tri descendant
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

// Exemple d'utilisation de la fonction
var numbers = [7, 2, 9, 1, 5];
console.log(tri(numbers, "asc")); // [1, 2, 5, 7, 9] (tri ascendant)
console.log(tri(numbers, "desc")); // [9, 7, 5, 2, 1] (tri descendant)

