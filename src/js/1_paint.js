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
