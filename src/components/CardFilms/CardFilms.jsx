import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card/Card'
import "./CardFilms.css"

const CardFilms = () => {
  const filmsData = useSelector((state) => state.filmsReducer.filmsCard)
  const films = filmsData.map(film => <Card key={film.id} film={film} />)
  return (
    <div className='cardFilms'>{films}</div>
  )
}

export default CardFilms