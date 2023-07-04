window.addEventListener("scroll", updateFooterColor);

function updateFooterColor() {
  const bodyHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPosition = window.pageYOffset;
  const percentage = (scrollPosition / bodyHeight) * 100;
  const footer = document.querySelector("footer");

  footer.style.backgroundColor = `hsl(${percentage}, 100%, 50%)`;
}

  