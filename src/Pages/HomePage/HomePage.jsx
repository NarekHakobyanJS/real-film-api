import React from 'react'
import CardFilms from '../../components/CardFilms/CardFilms'
import Genres from '../../components/Genres/Genres'
import Pagination from '../../components/Pagination/Pagination'
import MainSlider from '../../components/Slider/MainSlider/MainSlider'
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className='home-page'>
      <Genres />
      <MainSlider />
      <CardFilms />
      <Pagination />
    </div>
  )
}

export default HomePage