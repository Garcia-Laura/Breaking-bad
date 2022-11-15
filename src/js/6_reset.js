function handleReset() {
  favouriteCharacters = [];
  renderFavourites();
  renderCharacters();
  localStorage.removeItem("favourites");
}

reset.addEventListener("click", handleReset);
