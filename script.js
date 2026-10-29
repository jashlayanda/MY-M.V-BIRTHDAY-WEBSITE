function enterSite() {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("mainContent");

  intro.style.display = "none";
  mainContent.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function replay() {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("mainContent");

  mainContent.style.display = "none";
  intro.style.display = "flex";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}