// querySelector

const input = document.querySelector(".js-input ");
const btn = document.querySelector(".js-button-search");
const favourites = document.querySelector(".js-favouritesList");
const results = document.querySelector(".js-resultsList");

// Variables globales(Vatiables con datos de la app)
let actors = [];

// Petición al servidor con fetch y función para pintar los personajes en la web

function renderCharacters() {
  let html = "";

  for (const characters of actors) {
    html += `<li>
      <article class ="article js-articles" >
      <img class="img" src=${characters.img}>
      <h3 class = "name"> ${characters.name}</h3>
      <p class = "status">${characters.status}</p>
      </article>
      </li>;`;
  }

  results.innerHTML = html;

  const allArticles = document.querySelectorAll(".js-articles");
  for (const eachArticles of allArticles) {
    eachArticles.addEventListener("click", handleArticles);
  }
  function handleArticles(ev) {
    console.log("cliiick");
  }
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

//# sourceMappingURL=main.js.map
