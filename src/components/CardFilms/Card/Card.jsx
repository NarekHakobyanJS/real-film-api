import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setFilmPageAC } from '../../../redux/filmPageReducer';
import "./Card.css"

const Card = ({ film }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500/"
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const goToFilmPage = (film) => {
    dispatch(setFilmPageAC(film))
    navigate(`film/${film.id}`)
  }
  return (
    <div className='card'>
      <div className='card-img-block' onClick={() => goToFilmPage(film)}>
        <img className='card-img' src={imgUrl + film.poster_path} />
      </div>
      <div className='card-description'>
        <h2>{film.title}</h2>
      </div>
    </div>
  )
}

export default Card