function sommenombrespremiers(nombre1, nombre2) {
    if (estPremier(nombre1) && estPremier(nombre2)) {
        return nombre1 + nombre2;
    } else {
        return false;
    }
}

// Fonction pour vérifier si un nombre est premier
function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}

// Exemples d'utilisation de la fonction
console.log(sommenombrespremiers(5, 7)); // 5 + 7 = 12 (somme de deux nombres premiers)
console.log(sommenombrespremiers(4, 9)); // false (4 n'est pas premier)
console.log(sommenombrespremiers(11, 13)); // 11 + 13 = 24 (somme de deux nombres premiers)

