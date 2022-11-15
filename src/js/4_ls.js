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
