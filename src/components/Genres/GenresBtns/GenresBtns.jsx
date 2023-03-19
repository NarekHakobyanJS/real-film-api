import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./GenresBtns.css"
import { setFilterFilmsGenres } from '../../../redux/FilmsCardReducer'
const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const GenresBtns = ({genres}) => {
  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.filmsReducer.currentPage)
  const filterByGenre = (genres) => {
    let genresId = genres.id
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genresId}&page=${currentPage}`)
    .then(response => dispatch(setFilterFilmsGenres(response.data.results)))
  }
  return (
    <button 
    onClick={() => filterByGenre(genres)}
    className='genresBtns'>{genres.name}</button>
  )
}

export default GenresBtns