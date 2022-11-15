function handleReset() {
  //   console.log("click reset");
  //   for (let i = 0; i < 20; i++) {
  //     html += "";
  favouriteCharacters = [];
  renderFavourites();
  renderCharacters();
  localStorage.removeItem("favourites");
}
//   favourites.innerHTML = html;
// }

reset.addEventListener("click", handleReset);
