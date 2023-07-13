import './Card.css'
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react'
import {getSelectedMovieData } from '../apiCalls'

const Card = ({ title, rating, image }) => {
  return (
    <article>
      <img src={image} className="card-image" />
      <div className="card-details">
        <h3>{title}</h3>
        <p>🍅 Rating: {rating}/10</p>
      </div>
    </article>
  ) 
}

export default Card

Card.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  selectMovie: PropTypes.func.isRequired 
};