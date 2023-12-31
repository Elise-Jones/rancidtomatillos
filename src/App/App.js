import Gallery from "../Gallery/Gallery";
import Movie from "../Movie/Movie";
import Error from "../Error/Error";
import "./App.css";
import { useState, useEffect } from "react";
import { getMoviesData } from "../apiCalls";
import { Link, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getMoviesData()
      .then((data) => setMovies(data.movies))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      <header>
        <Link to="/">
          <h1>Rancid Tomatillos</h1>
        </Link>
        <h2 className="subheader">Unleash Movie Magic 💫</h2>
      </header>
      {error && <Navigate to="/error" />}
      <Routes>
        <Route path="/" element={<Gallery movies={movies} />} />
        <Route path="/error" element={<Error setError={setError} />} />
        <Route path="/:id" element={<Movie setError={setError} />} />
        <Route path="/*" element={<Navigate to="/error" />} />
      </Routes>
    </>
  );
};

export default App;
