// querySelector

const input = document.querySelector(".js-input ");
const btn = document.querySelector(".js-button-search");
const favourites = document.querySelector(".js-favouritesList");
const results = document.querySelector(".js-resultsList");

// Variables globales(Vatiables con datos de la app, array de objetos)
let actors = [];
let favouriteCharacters = [];

// Petición al servidor con fetch y función para pintar los personajes en la web

function renderCharacters() {
  let html = "";

  for (const characters of actors) {
    html += `<li>
      <article class ="article js-articles" id= "${characters.char_id}">
      <img class="img" src=${characters.img}>
      <h3 class = "name"> ${characters.name}</h3>
      <p class = "status">${characters.status}</p>
      </article>
      </li>;`;
  }

  results.innerHTML = html;
  addCharactersEvent();
}

fetch("https://breakingbadapi.com/api/characters")
  .then((response) => response.json())
  .then((dataResult) => {
    console.log(dataResult);
    actors = dataResult;
    renderCharacters();
  });

// Evento y función manejadora para buscar personajes. La petición de búsqueda se ha hecho con petición al servidor. Mirar TolowerCase

function handleClickSearch(ev) {
  ev.preventDefault();

  const searchValue = input.value;

  fetch(`https://breakingbadapi.com/api/characters?name=${searchValue}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      actors = data;
      renderCharacters(actors);
    });
}

btn.addEventListener("click", handleClickSearch);

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

//# sourceMappingURL=main.js.map
