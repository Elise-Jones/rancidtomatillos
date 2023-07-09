import Card from '../Card/Card'
import PropTypes from 'prop-types';
import './Gallery.css'

const Gallery = ( { movies, selectMovie } ) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        title={movie.title}
        rating={movie.average_rating}
        image={movie.poster_path}
        id={movie.id}
        key={movie.id}
        selectMovie={selectMovie}
      />
    )
  })

  return (
    <main className="gallery">
      <h2>All movies</h2>
      <section className="cards-container">
        {movieCards}
      </section>
    </main>
  )
}

export default Gallery

Gallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  selectMovie: PropTypes.func.isRequired
}