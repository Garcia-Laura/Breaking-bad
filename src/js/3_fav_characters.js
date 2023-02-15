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

      // (-1 porque no existe y por lo tanto como no existe me lo pinta)
    } else {
      favouriteCharacters.splice(oneFavouriteIndex, 1);

      // oneFavouriteIndex nos dice el indexedDB, en que posición está el objeto, y solo queremos quitar uno
    }

    localStorage.setItem("favourites", JSON.stringify(favouriteCharacters));

    renderFavourites();
  }
}

// funcion para pintar los personajes favoritos.
// Se desarrolla aqui pero la llamamos en la funcion manejadora
function renderFavourites() {
  let html = "";

  for (const characters of favouriteCharacters) {
    html += `<li>
        <article class ="article-fav js-articlesFav" >
        <i class=" js-bDelete fa-solid fa-user-minus" id= "${characters.char_id}"></i>
        <img class="img-fav" src=${characters.img}>
        <h3 class = "name-fav"> ${characters.name}</h3>
        <p class = "status-fav">${characters.status}</p>
        </article>
        </li>`;
  }

  favourites.innerHTML = html;
  addIconsEvent();
}
