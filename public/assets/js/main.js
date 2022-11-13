


"use strict";

const input = document.querySelector(".js-input ");
const btn = document.querySelector(".js-button-search");
const favourites = document.querySelector(".js-favouritesList");
const results = document.querySelector(".js-resultsList");
let actors = [];

function renderCharacters(actors) {
  let html = "";

  for (const characters of actors) {
    html += `<li>
    <article class ="article" >
    <img class="img" src=${characters.img}>
    <h3 class = "name"> ${characters.name}</h3>
    <p class = "status">${characters.status}</p>
    </article>
    </li>;`;
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

//# sourceMappingURL=main.js.map
