import Card from '../Card/Card'
import './Gallery.css'

const Gallery = ( { movies } ) => {

  const movieCards = movies.map(movie => {
    return (
      <Card
        title={movie.title}
        rating={movie.average_rating}
        image={movie.poster_path}
        id={movie.id}
        key={movie.id}
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