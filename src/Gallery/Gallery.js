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
      <div className="main-overlay">
        <h2 className="gallery-title">~ What to Watch ~</h2>
        <section className="cards-container">
          {movieCards}
        </section>
      </div>
    </main>
  )
}

export default Gallery

Gallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  selectMovie: PropTypes.func.isRequired
}