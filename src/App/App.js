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
      .catch((error) => setError(error));
  }, []);
  if (error) {
    return <Error />;
  }

  return (
    <>
      <header>
        <Link to="/">
          <h1>Rancid Tomatillos</h1>
        </Link>
        <h2 className="subheader">Unleash Movie Magic 💫</h2>
      </header>
      <Routes>
        <Route path="/" element={<Gallery movies={movies} />} />
        <Route path="/:id" element={<Movie setError={setError} />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </>
  );
};

export default App;
