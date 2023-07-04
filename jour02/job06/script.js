const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];
  let konamiIndex = 0;
  
  document.addEventListener("keydown", checkKonamiCode);
  
  function checkKonamiCode(event) {
    if (event.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        applyStyling();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  }
  
  function applyStyling() {
    document.body.classList.add("konami-style");
  }
  