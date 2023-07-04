document.addEventListener("keydown", keylogger);

function keylogger(event) {
  var textarea = document.getElementById("keylogger");
  var key = event.key.toLowerCase();

  if (key.match(/[a-z]/)) {
    if (document.activeElement !== textarea) {
      textarea.value += key;
    } else {
      textarea.value += key;
    }
  }
}
