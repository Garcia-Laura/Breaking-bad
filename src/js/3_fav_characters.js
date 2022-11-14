"use strict";
// Seleccionar personaje favorito.
// Con esta función añado el evento a cada personaje.
// La ejecuto aquí pero la llamo 1_paint para que me pinte a los personajes

function addCharactersEvent() {
  const allArticles = document.querySelectorAll(".js-articles");
  for (const eachArticles of allArticles) {
    eachArticles.addEventListener("click", handleArticles);
  }
  function handleArticles(ev) {
    console.log("hola");
    ev.currentTarget.classList.toggle("selected");

    const selectFav = actors.find(
      (eachCharactersObj) =>
        eachCharactersObj.char_id === parseInt(ev.currentTarget.id)
    );

    const oneFavouriteIndex = favouriteCharacters.findIndex(
      (eachCharactersObj) =>
        eachCharactersObj.char_id === parseInt(ev.currentTarget.id)
    );

    if (oneFavouriteIndex === -1) {
      favouriteCharacters.push(selectFav);
      localStorage.setItem("favourites", JSON.stringify(favouriteCharacters));

      // (-1 porque no existe y por lo tanto como no existe me lo pinta)
    } else {
      favouriteCharacters.splice(oneFavouriteIndex, 1);
      localStorage.setItem("favourites", JSON.stringify(favouriteCharacters));
      // oneFavouriteIndex nos dice el indexedDB, en que posición está el objeto, y solo queremos quitar uno
    }

    renderFavourites();
  }
}

// funcion para pintar los personajes favoritos.
// Se desarrolla aqui pero la llamamos en la funcion manejadora
function renderFavourites() {
  let html = "";

  for (const characters of favouriteCharacters) {
    html += `<li>
        <article class ="article-fav js-articles" id= "${characters.char_id}">
        <img class="img-fav" src=${characters.img}>
        <h3 class = "name"> ${characters.name}</h3>
        <p class = "status">${characters.status}</p>
        </article>
        </li>`;
  }

  favourites.innerHTML = html;
}
