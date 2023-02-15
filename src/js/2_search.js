

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





