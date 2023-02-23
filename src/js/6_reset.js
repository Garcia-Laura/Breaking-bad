function handleReset() {
  favouriteCharacters = [];
  renderFavourites();
  renderCharacters();
  localStorage.removeItem("favourites");
  containerFav.classList.add("hidden");
    
}

reset.addEventListener("click", handleReset);
