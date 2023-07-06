$(document).ready(function() {
    // Configuration initiale des carreaux
    var tiles = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9"];
    var emptyTile = "tile9"; // ID de la case vide
  
    // Mélanger les carreaux aléatoirement
    shuffleTiles();
  
    // Gérer le clic sur un carreau
    $(document).on("click", ".puzzle-tile", function() {
      var currentTile = $(this).attr("id");
  
      if (isAdjacent(currentTile, emptyTile)) {
        swapTiles(currentTile, emptyTile);
        emptyTile = currentTile;
  
        if (isSolution()) {
          $("#puzzle-container").addClass("solved");
          $("#restart-button").show();
        }
      }
    });
  
    // Gérer le clic sur le bouton "Recommencer"
    $("#restart-button").click(function() {
      $("#puzzle-container").removeClass("solved");
      $("#restart-button").hide();
      shuffleTiles();
    });
  
    // Mélanger les carreaux aléatoirement
    function shuffleTiles() {
      for (var i = tiles.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = tiles[i];
        tiles[i] = tiles[j];
        tiles[j] = temp;
      }
  
      updateTilePositions();
    }
  
    // Mettre à jour les positions des carreaux sur la grille
    function updateTilePositions() {
      $("#puzzle-container").children().each(function(index) {
        $(this).appendTo("#puzzle-container").attr("id", tiles[index]);
      });
    }
  
    // Échanger les positions de deux carreaux
    function swapTiles(tile1, tile2) {
      $("#" + tile1).swap($("#" + tile2));
    }
  
    // Vérifier si deux carreaux sont adjacents
    function isAdjacent(tile1, tile2) {
      var index1 = tiles.indexOf(tile1);
      var index2 = tiles.indexOf(tile2);
  
      var row1 = Math.floor(index1 / 3);
      var col1 = index1 % 3;
      var row2 = Math.floor(index2 / 3);
      var col2 = index2 % 3;
  
      return (Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1);
    }
  
    // Vérifier si la configuration actuelle est la solution
    function isSolution() {
      var solution = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9"];
  
      for (var i = 0; i < tiles.length; i++) {
        if (tiles[i] !== solution[i]) {
          return false;
        }
      }
  
      return true;
    }
  });
  


          
  