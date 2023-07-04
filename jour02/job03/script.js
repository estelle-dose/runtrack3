var compteur = 0;
var bouton = document.getElementById("button");
var compteurElement = document.getElementById("compteur");

bouton.addEventListener("click", addone);

function addone() {
  compteur++;
  compteurElement.textContent = compteur;
}
