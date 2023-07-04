function showhide() {
    var article = document.getElementById("article");
  
    if (article) {
      article.parentNode.removeChild(article);
    } else {
      var newArticle = document.createElement("article");
      newArticle.id = "article";
      newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
  
      document.body.appendChild(newArticle);
    }
  }
  