// querySelector

const input = document.querySelector(".js-input ");
const btn = document.querySelector(".js-button-search");
const favourites = document.querySelector(".js-favouritesList");
const results = document.querySelector(".js-resultsList");
const reset = document.querySelector(".js-reset");
// const iconFav = document.querySelector(".js-fav");
const containerFav = document.querySelector(".js-favourites-container")



// Variables globales(Variables con datos de la app, array de objetos)
let actors = [];
let favouriteCharacters = [];

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
      
    html += `<li class= "event">
    
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



 function filterCharacters () {
  const searchValue = input.value.toLowerCase();
  return actors.filter((eachActors) => eachActors.name.toLowerCase().includes(searchValue));
  
 }

 function handleClickSearch(ev) {
  console.log('click')
  ev.preventDefault();
  const charractersFiltered = filterCharacters();
  console.log (charractersFiltered);
  renderCharacters (charractersFiltered)
 }

 btn.addEventListener("click", handleClickSearch);






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

// Añado setItem a la condicional de favoritos y luego creo una nueva variable para recuperarlas y que se queden pintadas.al final de la pag

// Te tengo que crear una condicional porque sino me da error. Me dice que esos valores son nulos, por lo tanto creo una condicional donde digo que si es diferente de null me los pinte
function getFavFromLocal() {
  const savedFavourites = JSON.parse(localStorage.getItem("favourites"));
  if (savedFavourites !== null) {
    favouriteCharacters = savedFavourites;
    renderFavourites();
  }
}

// La condicional para que los actores fav se mantengan con el selectd se encuentran dentro de la funcion render de fav, que es quien la pinta

// Creo un evento para todos lo iconos
// hago la función manejadora y dentro un bucle
// comparo el id de cual quito y donde pincho
// y mando pintar

function addIconsEvent() {
  const icons = document.querySelectorAll(".js-bDelete");
  for (const eachIcons of icons) {
    eachIcons.addEventListener("click", handleIcons);
  }
}
function handleIcons(ev) {
  const deleteFav = favouriteCharacters.findIndex(
    (eachCharactersObj) =>
      eachCharactersObj.char_id === parseInt(ev.currentTarget.id)
  );
  favouriteCharacters.splice(deleteFav, 1);
  renderFavourites();
  renderCharacters();
 if (favouriteCharacters.length === 0 ){
  containerFav.classList.add("hidden");
 
 } 
 
}


function handleReset() {
  favouriteCharacters = [];
  renderFavourites();
  renderCharacters();
  localStorage.removeItem("favourites");
  containerFav.classList.add("hidden");
    
}

reset.addEventListener("click", handleReset);



function handleClickFav () {
    containerFav.classList.remove("hidden");
    
    console.log("click")
}
results.addEventListener ("click", handleClickFav);


//# sourceMappingURL=main.js.map
