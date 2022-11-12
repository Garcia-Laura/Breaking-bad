"use strict";

console.log(">> Ready :)");

const input = document.querySelector(".js-input ");
const bttnSearch = document.querySelector(".js-button-search");
const favourites = document.querySelector(".js-favouritesList");
const results = document.querySelector(".js-resultsList");

console.log(1);

console.log(2);
let actors = [];

function renderCharacters(actors) {
  console.log("estoy pintando actores");

  let html = "";

  for (const Characters of actors) {
    html += `<li><article><div class="characters__img" style="background-image:url('${Characters.img}')"></div><h2>${Characters.name}</h2><h3>${Characters.status}</h3></article></li>`;
    debugger;
  }

  results.innerHTML = html;
}

fetch("https://breakingbadapi.com/api/characters")
  .then((response) => response.json())
  .then((dataResult) => {
    console.log(dataResult);
    actors = dataResult;
    renderCharacters(actors);
  });
