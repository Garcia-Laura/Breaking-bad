function handleReset() {
  favouriteCharacters = [];
  renderFavourites();
  renderCharacters();
  localStorage.removeItem("favourites");
  reset.classList.add("hidden");
    iconFav.classList.add("hidden");
}

reset.addEventListener("click", handleReset);
