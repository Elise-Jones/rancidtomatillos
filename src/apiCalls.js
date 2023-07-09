const getMoviesData = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => checkForError(response))
    .catch(error => alert(`${error.message}`))
}

const checkForError = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  };
};

export { getMoviesData }