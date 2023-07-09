import "./Movie.css";
const Movie = ({ movie, selectMovie }) => {

  return (
    <main className="single-movie-container">
      <button onClick={() => selectMovie('')}>go back</button>
      <h2>{movie.title}</h2>
      <h3>{movie.tagline}</h3>
      <span>
        <img className="movie-image" src={movie.poster_path} />
        <div>
          <p>{movie.overview}</p>
          <p>{movie.average_rating}</p>
          <p>{movie.genres}</p>
          <p>{movie.release_date}</p>
          <p>{movie.runtime}</p>
          <p>{movie.budget}</p>
          <p>{movie.revenue}</p>
        </div>
      </span>
    </main>
  );
};

export default Movie;