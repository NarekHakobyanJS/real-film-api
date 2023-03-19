import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import { setGenresAC } from './redux/genresReducer';
import { setActualPagesAC, setFilmsCardAC } from './redux/FilmsCardReducer';
import FilmPage from './Pages/FilmPage/FilmPage';
import Login from './components/Login/Login';

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"


function App() {

  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.filmsReducer.currentPage)
  const isAuth = useSelector((state) => state.auth.isAuth)
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
      .then(response => dispatch(setGenresAC(response.data.genres)))
  }, [])

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${currentPage}`)
      .then(response => {
        dispatch(setActualPagesAC(response.data.total_pages))
        dispatch(setFilmsCardAC(response.data.results))
      })
  }, [currentPage])
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film/:id" element={<FilmPage />} />
      </Routes>
      {
        isAuth ? null : <Login />
      }
    </div>
  );
}

export default App;
