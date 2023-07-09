import './Card.css'
import { useState, useEffect } from 'react'
import {getSelectedMovieData } from '../apiCalls'

const Card = ({ title, rating, image, id, selectMovie}) => {
  const [movieID, setMovieID] = useState('');

  useEffect((movieID) => {
    if (movieID) {
      getSelectedMovieData(movieID)
      .then(data => selectMovie(data))
      .then(data => console.log(data))
    }
  }, [movieID])
  
  return (
    <article>
      <img src={image} className="card-image" />
      <div className="card-details">
        <h3 id={id} onClick={(event) => setMovieID(event.target.id)}>{title}</h3>
        <p>{rating}</p>
      </div>
    </article>
  ) 
}

export default Card