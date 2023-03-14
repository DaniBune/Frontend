// Met CSS logica de hamburger button selecteren
var hbMenu = document.querySelector("header nav button");

// Luisteren naar een klik op die button en dan de "clickHandler" uitvoeren
hbMenu.addEventListener("click", clickHandler);

// Krijg altijd een event variabele mee door de evenListener
function clickHandler(event) {
  // Event.target is waar ik op geklikt heb en met .closest() ga ik zoeken naar de eerste nav die boven de target ligt
  // Op die nav toggle ik de class "open"
  // Bron voor closest: https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  event.target.closest("section").classList.toggle("open");
}
