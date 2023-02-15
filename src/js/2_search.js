// /   // fetch(`https://breakingbadapi.com/api/characters?name=${searchValue}`)
//   //   .then((response) => response.json())
//   //   .then((data) => {
//   //     actors = data;
//   //     renderCharacters(actors);
//   //   });
// // }


// function renderFilteredCharacters (searchList) {
//   charactersList.innerHTML = '';

//   for (let i = 0; i < filteredCharacters.length; i++) { 
//     charactersList.appendChild(renderCharacter(filteredCharacters[i]));
//   }
//   addListenerCharacters();

// }





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










// btn.addEventListener('click', (event) => {
//   console.log('click')
//   event.preventDefault();
//   const searchValue = input.value.toLowerCase();
//   filteredCharacters = actors.filter((actors) => actors.name.toLowerCase().includes(searchValue)
//   );
//   renderCharacters (filteredCharacters);
// });


// // Evento y función manejadora para buscar personajes.
// //  La petición de búsqueda se ha hecho con petición al servidor. Mirar TolowerCase
// // La petición se solicita dentro de la función porque queremos que nos busque el personaje
// // cuando hagamos click

// function handleClickSearch(ev) {
//   console.log("he hecho click")
//   ev.preventDefault();

//   const searchValue = input.value.toLowerCase();
//   contentResultsElement.innerHTML = '';
  
//   foundCharacters =  actors.filter((eachActors) =>
//   eachActors.name.toLowerCase().includes(searchValue));
//   renderCharacters (foundCharacters, contentResultsElement) ;
// }

// // function search() {
// //   if (foundCharacters.length === 0) {
// //     const noFavText = document.querySelector('.js_no_fav_text');
// //     if (noFavText !== null) {
// //       noFavText.remove();
// //     }
// //     searchErrorMessage();
// //     renderCharacters(actors);
// //   } else {
// //     const errorText = document.querySelector('.js_error_text');
// //     if (errorText !== null) {
// //       errorText.remove();
// //       noFavoritesMessage();
// //     }
// //     renderCharacters(foundCharacters);
// //   }
// // }
// // function checkIfSearch() {
// //   if (foundCharacters.length === 0) {
// //     paintCharacterList(actors);
// //   } else {
// //     renderCharacters(foundCharacters);
// //   }
// // }

//   // fetch(`https://breakingbadapi.com/api/characters?name=${searchValue}`)
//   //   .then((response) => response.json())
//   //   .then((data) => {
//   //     actors = data;
//   //     renderCharacters(actors);
//   //   });
// // }

// btn.addEventListener("click", handleClickSearch);
