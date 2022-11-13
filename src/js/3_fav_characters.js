"use strict";
function addCharactersEvent() {
  const allArticles = document.querySelectorAll(".js-articles");
  for (const eachArticles of allArticles) {
    eachArticles.addEventListener("click", handleArticles);
  }
  function handleArticles(ev) {
    ev.currentTarget.classList.toggle("selected");
    const selectFav = actors.find(
      (eachCharactersObj) =>
        eachCharactersObj.char_id === parseInt(ev.currentTarget.id)
    );

    const OneFavourite = favouriteCharacters.find(
      (eachCharactersObj) =>
        eachCharactersObj.char_id === parseInt(ev.currentTarget.id)
    );

    if (!OneFavourite) {
      favouriteCharacters.push(selectFav);
    }

    renderFavourites();
  }
}
function renderFavourites() {
  let html = "";

  for (const characters of favouriteCharacters) {
    html += `<li>
        <article class ="article js-articles" id= "${characters.char_id}">
        <img class="img" src=${characters.img}>
        <h3 class = "name"> ${characters.name}</h3>
        <p class = "status">${characters.status}</p>
        </article>
        </li>;`;
  }

  favourites.innerHTML = html;
}
