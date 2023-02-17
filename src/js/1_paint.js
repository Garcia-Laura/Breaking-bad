// Petición al servidor con fetch y función para pintar los personajes en la web

function renderCharacters (charractersFiltered) {
  let html = "";
  let classFav = "";
  let actorsToPaint = charractersFiltered === undefined ? actors : charractersFiltered;
   


  // if (charractersFiltered !== undefined){
  //   actorsToPaint = charractersFiltered;
  // }

  for (const characters of actorsToPaint) {
    const oneFavouriteIndex = favouriteCharacters.findIndex(
      (eachCharactersObj) =>
        eachCharactersObj.char_id === parseInt(characters.char_id)
    );
    
    classFav = oneFavouriteIndex === -1 ? "" : "selected"
    // if (oneFavouriteIndex === -1) {
    //   classFav = "";
    // } else {
    //   classFav = "selected";
    // }
      
    html += `<li class= " event">
    
      <article class ="${classFav} article js-articles" id= "${characters.char_id}" >
      <img class="img" src=${characters.img} >
      <h3 class = "name"> ${characters.name} </h3>
      <p class = "status">${characters.status}</p>
      </article>
      </li>`;
  }

  results.innerHTML = html;
  addCharactersEvent();
}

fetch("./assets/data/characters.json")
  .then((response) => response.json())
  .then((dataResult) => {
    actors = dataResult;
    getFavFromLocal();
    renderFavourites();
    renderCharacters();
  });
