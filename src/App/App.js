import Gallery from '../Gallery/Gallery'
import movieData from '../sampleData';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [movies, setMovies] = useState(movieData);

  return (
  <>
  <h1>Rancid Tomatillos</h1>
    <Gallery />
  </>

  )
}

export default App;
