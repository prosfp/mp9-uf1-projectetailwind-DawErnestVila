document.addEventListener("DOMContentLoaded", function () {
  // Obtén les referències als elements del botó i del menú
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  // Afegeix un gestor d'esdeveniments al botó
  menuButton.addEventListener("click", function () {
    // Comprova si l'element del menú té la classe "hidden"
    const isHidden = menu.classList.contains("hidden");

    // Alterna la classe "hidden" de l'element del menú
    if (isHidden) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });

  // Afegeix un gestor d'esdeveniments al document per amagar el menú quan es fa clic fora d'ell
  document.addEventListener("click", function (event) {
    if (event.target !== menuButton && !menu.contains(event.target)) {
      menu.classList.add("hidden");
    }
  });
});
