const getMoviesData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => checkForError(response))
}

const getSelectedMovieData = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => checkForError(response))
}

const checkForError = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`asdfasdf`);
  };
};

export { getMoviesData, getSelectedMovieData }