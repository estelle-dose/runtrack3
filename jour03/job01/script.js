$(document).ready(function() {
    // Sélectionner le bouton "Afficher la citation" et ajouter un gestionnaire d'événement au clic
    $("#showButton").click(function() {
      // Afficher le contenu de la citation en utilisant la méthode .show() de jQuery
      $("#content").show();
    });
  
    // Sélectionner le bouton "Cacher l'élément HTML" et ajouter un gestionnaire d'événement au clic
    $("#hideButton").click(function() {
      // Cacher l'élément en utilisant la méthode .hide() de jQuery
      $("#content").hide();
    });
  });
  
  