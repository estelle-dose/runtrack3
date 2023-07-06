<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "Etoile19*";
$dbname = "utilisateurs";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("La connexion a échoué : " . $conn->connect_error);
}

// Récupération des utilisateurs
$sql = "SELECT * FROM utilisateurs";
$result = $conn->query($sql);

// Création du tableau associatif des utilisateurs
$users = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
}

// Fermeture de la connexion à la base de données
$conn->close();

// Affichage des utilisateurs au format JSON
header('Content-Type: application/json');
echo json_encode($users);
?>
