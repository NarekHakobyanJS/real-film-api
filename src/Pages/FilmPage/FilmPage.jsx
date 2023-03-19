import React from 'react'
import { useSelector } from 'react-redux'
import Comments from '../../components/Comments/Comments'
import './FilmPage.css'
import Comment from '../../components/Comments/Comment/Comment'

const imgUrl = "https://image.tmdb.org/t/p/w500/"

const FilmPage = () => {

  const filmPage = useSelector((state) => state.filmPage.film)
  console.log(filmPage);
  return (
    <div className='filmPage'>
      <h1>{filmPage.title}</h1>
      <div className='filmPage-poster'>
        <img src={imgUrl + filmPage.backdrop_path} />
        <div className='overlay'></div>
      </div>
      <div className='filmPage-block'>
        <div className='filmPage-img'>
          <img src={imgUrl + filmPage.poster_path} />
        </div>
        <div className='filmPage-description'>

          <h3>title : {filmPage.original_title}</h3>
          <h3>overview : {filmPage.overview}</h3>
          <h3>release date : {filmPage.release_date}</h3>
          <h3>language : {filmPage.original_language}</h3>
          <h3>vote : 10 / {filmPage.vote_average}</h3>
          <h3>popularity : {filmPage.popularity}</h3>

        </div>
      </div>
      <Comments />
      <Comment />
    </div>
  )
}

export default FilmPage