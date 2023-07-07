import Gallery from '../Gallery/Gallery'
import movieData from '../sampleData';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState(movieData.movies);
  const [selectedMovie, setSelectedMovie] = useState('movie');

  // const updateSelectedMovie = () => {

  // }

// set state for selected Movie
// declare setter function  that is passed down to Gallery as a prop

  return (
  <>
    <h1>Rancid Tomatillos</h1>
    {/* conditional: selectedMove && One Movie component */}
    {/* when home button is clicked, reset selectedMovie to falsy? */}
    {selectedMovie ? <h3>MOVIE PAGE</h3> : <Gallery movies={movies}/>}
  </>

  )
}

export default App;
