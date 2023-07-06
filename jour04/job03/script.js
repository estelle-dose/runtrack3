function filterPokemon() {
    // Récupérer les valeurs des champs de filtrage
    var id = document.getElementById("idInput").value.trim();
    var name = document.getElementById("nameInput").value.trim();
    var type = document.getElementById("typeSelect").value;

    // Effectuer la requête Fetch pour récupérer les données Pokemon
    fetch('pokemon.json')
        .then(response => response.json())
        .then(data => {
            // Filtrer les données en fonction des critères sélectionnés
            var filteredPokemon = data.filter(pokemon => {
                // Vérifier les critères de filtrage
                var matchesID = id === "" || pokemon.id.toString().includes(id);
                var matchesName = name === "" || 
                    pokemon.name.english.toLowerCase().includes(name.toLowerCase()) ||
                    pokemon.name.japanese.includes(name) ||
                    pokemon.name.chinese.includes(name) ||
                    pokemon.name.french.toLowerCase().includes(name.toLowerCase());
                var matchesType = type === "" || pokemon.type.includes(type);

                return matchesID && matchesName && matchesType;
            });

            // Afficher les résultats
            var resultsElement = document.getElementById("results");
            resultsElement.innerHTML = "";

            if (filteredPokemon.length > 0) {
                filteredPokemon.forEach(pokemon => {
                    var pokemonElement = document.createElement("div");
                    pokemonElement.textContent = "ID: " + pokemon.id +
                        ", Nom (anglais): " + pokemon.name.english +
                        ", Nom (japonais): " + pokemon.name.japanese +
                        ", Nom (chinois): " + pokemon.name.chinese +
                        ", Nom (français): " + pokemon.name.french +
                        ", Type: " + pokemon.type.join(", ") +
                        ", Base: HP(" + pokemon.base.HP +
                        "), Attaque(" + pokemon.base.Attack +
                        "), Défense(" + pokemon.base.Defense +
                        "), Attaque Spéciale(" + pokemon.base["Sp. Attack"] +
                        "), Défense Spéciale(" + pokemon.base["Sp. Defense"] +
                        "), Vitesse(" + pokemon.base.Speed + ")";
                    resultsElement.appendChild(pokemonElement);
                });
            } else {
                var noResultsElement = document.createElement("div");
                noResultsElement.textContent = "Aucun résultat trouvé.";
                resultsElement.appendChild(noResultsElement);
            }
        });
}
