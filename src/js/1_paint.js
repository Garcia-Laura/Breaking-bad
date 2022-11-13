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
