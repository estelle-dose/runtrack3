// Fonction pour mettre à jour le tableau des utilisateurs
function updateUsers() {
    $.getJSON('users.php', function(data) {
        var table = $('#users-table');
        table.empty();

        // En-tête du tableau
        var tableHeader = $('<tr>').append(
            $('<th>').text('ID'),
            $('<th>').text('Nom'),
            $('<th>').text('Prénom'),
            $('<th>').text('Email')
        );
        table.append(tableHeader);

        // Ajout des lignes pour chaque utilisateur
        $.each(data, function(index, user) {
            var tableRow = $('<tr>').append(
                $('<td>').text(user.id),
                $('<td>').text(user.nom),
                $('<td>').text(user.prenom),
                $('<td>').text(user.email)
            );
            table.append(tableRow);
        });
    });
}

$(document).ready(function() {
    // Initialisation du tableau des utilisateurs lors du chargement de la page
    updateUsers();

    // Action du bouton "update"
    $('#update-button').click(function() {
        updateUsers();
    });
});