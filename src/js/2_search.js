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
