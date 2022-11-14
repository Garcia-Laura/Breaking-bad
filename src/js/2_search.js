// Evento y función manejadora para buscar personajes.
//  La petición de búsqueda se ha hecho con petición al servidor. Mirar TolowerCase
// La petición se solicita dentro de la función porque queremos que nos busque el personaje
// cuando hagamos click

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
