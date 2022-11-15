// Creo un evento para todos lo iconos
// hago la función manejadora y dentro un bucle
// comparo el id de cual quito y donde pincho
// y mando pintar

function addIconsEvent() {
  const icons = document.querySelectorAll(".js-bDelete");
  for (const eachIcons of icons) {
    eachIcons.addEventListener("click", handleIcons);
  }
}
function handleIcons(ev) {
  const deleteFav = favouriteCharacters.findIndex(
    (eachCharactersObj) =>
      eachCharactersObj.char_id === parseInt(ev.currentTarget.id)
  );

  favouriteCharacters.splice(deleteFav, 1);

  localStorage.setItem("favourites", JSON.stringify(favouriteCharacters));
  renderFavourites();
  renderCharacters();
}
