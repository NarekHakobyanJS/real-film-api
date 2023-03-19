import React, { useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import "./MainSlide.css"

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a";
const imgUrl = "https://image.tmdb.org/t/p/w500/";


function MainSlider() {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${"love"}`)
    .then(response => setFilm(response.data.results))
  }, [])

  let filmData = film.map(f => <FilmSlide title={f.title} background={f}/>)
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="s-slider">
        <Slider {...settings}>
          {filmData}
        </Slider>
      </div>
    );
  }


const FilmSlide = (props) => {
  return(
    <div className="filmSlide" style={{background : `url(${imgUrl}${props.background.backdrop_path})`, 
    backgroundRepeat : "no-repeat", backgroundSize : "cover",
    backgroundPosition : "center",
    overflow : 'hidden', 
  }}><h3>{props.title}</h3></div>
  )
}
  export default MainSlider