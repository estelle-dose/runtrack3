<!DOCTYPE html>
<html>
<head>
    <title>Filtrer les données Pokemon</title>
</head>
<body>
    <h1>Filtrer les données Pokemon</h1>

    <form id="filterForm">
        <label for="idInput">ID:</label>
        <input type="text" id="idInput"><br><br>

        <label for="nameInput">Nom:</label>
        <input type="text" id="nameInput"><br><br>

        <label for="typeSelect">Type:</label>
        <select id="typeSelect">
            <option value="">Tous</option>
            <option value="Fire">Feu</option>
            <option value="Water">Eau</option>
            <option value="Grass">Plante</option>
            <option value="Poison">Poison</option>
            <option value="Flying">Vol</option>
            <option value="Bug">Insecte</option>
            <option value="Normal">Normal</option>
            <option value="Electric">Electrique</option>
            <option value="Ground">Sol</option>
            <option value="Fairy">Fée</option>
            <option value="Fighting">Combat</option>
            <option value="Psychic">Psy</option>
            <option value="Rock">Roche</option>
            <option value="Steel">Acier</option>
            <option value="Ice">Glace</option>
            <option value="Ghost">Spectre</option>
            <option value="Dragon">Dragon</option>

        </select><br><br>

        <input type="button" value="Filtrer" onclick="filterPokemon()">
    </form>

    <div id="results"></div>

    <script src="script.js"></script>
</body>
</html>

