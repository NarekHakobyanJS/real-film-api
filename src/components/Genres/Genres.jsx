import React from 'react'
import { useSelector } from 'react-redux'
import GenresBtns from './GenresBtns/GenresBtns'
import "./Genres.css"

const Genres = () => {
  
    const genresData = useSelector((state) => state.genresReducer.genresArray)
    const genresBtn = genresData.map(genres => <GenresBtns key={genres.id} genres={genres}/>)
  return (
    <div className='genres'>{genresBtn}</div>
  )
}

export default Genres