// Appel de la fonction jsonValueKey() avec une chaîne JSON et une clé
var jsonString = '{ "name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019" }';
var key = "city";
var value = jsonValueKey(jsonString, key);

// Affichage du résultat dans la balise 'result'
var resultElement = document.getElementById("result");
resultElement.textContent = value;

// Fonction pour extraire la valeur d'une clé dans une chaîne JSON
function jsonValueKey(jsonString, key) {
    // Convertir la chaîne JSON en objet JavaScript
    var jsonObject = JSON.parse(jsonString);

    // Récupérer la valeur de la clé spécifiée
    var value = jsonObject[key];

    return value;
}
