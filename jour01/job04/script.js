function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation de la fonction
var anneeFalse = 2023;
console.log(bisextile(anneeFalse));

var anneeTrue = 2024;
console.log(bisextile(anneeTrue));


