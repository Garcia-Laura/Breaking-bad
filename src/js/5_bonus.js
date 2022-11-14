// creo la etqieuta enel HTML
// hago un q.al
// hago un bucle
// y pongo condición.
// Si pincho me lo quitas.

let iconsX = [];

function addIconsEvent() {
  const icons = document.querySelectorAll(".js-bDelete");
  for (const eachIcons of icons) {
    eachIcons.addEventListener("click", handleIcons);
  }
}
function handleIcons(ev) {
  console.log("click");
  const deleteFav = favouriteCharacters.findIndex(
    (eachCharactersObj) =>
      eachCharactersObj.char_id === parseInt(ev.currentTarget.id)
  );
  favouriteCharacters.splice(deleteFav, 1);
  localStorage.setItem("favourites", JSON.stringify(favouriteCharacters));
  renderFavourites();
}
