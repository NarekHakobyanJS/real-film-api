import React, { useState, useEffect, useRef } from 'react'
import "./SearchBlock.css";
import { AiOutlineClose } from "react-icons/ai"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFilmsAC } from '../../redux/searchFilmsReducer';
import { useNavigate } from 'react-router-dom';
import { setFilmPageAC } from '../../redux/filmPageReducer';
const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const SearchBlock = () => {
    const imgUrl = "https://image.tmdb.org/t/p/w500/"
    const [openPopup, setOpenPopup] = useState(false)
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const searchResults = useSelector((state) => state.search.searchResult)
    const navigate = useNavigate()
    const openPopupFunc = () => {
        setOpenPopup(true)
    }

    const onSelectItem = (index) => {
        setOpenPopup(false)
    }

    const searchRef = useRef()

    const togglevisiblePopup = () => {
        setOpenPopup(prev => !prev)
    }

    const handleOutSideClick = (e) => {
        if (!e.path.includes(searchRef.current)) {
            setOpenPopup(false)
        }
    }
    const clearText = () => {
        setText("")
        dispatch(setSearchFilmsAC([]))
        setOpenPopup(false)
    }

    const goToFilmPage = (film) => {
        navigate(`/film/${film.id}`)
        dispatch(setFilmPageAC(film))

    }
    useEffect(() => {
        document.body.addEventListener('click', handleOutSideClick)
    }, [])

    useEffect(() => {
        if (text.length >= 3) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}`)
                .then(response => dispatch(setSearchFilmsAC(response.data.results)))
        }
    }, [text])

    return (
        <div className='search' ref={searchRef}>
            <div className='search-block' >
                <input
                    onClick={openPopupFunc}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className='search-input'
                    placeholder='search...'
                />
                <AiOutlineClose
                    onClick={clearText}
                    className='clear-text'
                />
            </div>
            {openPopup ?
                <div className='search-result-block'>

                    {
                        searchResults.map(search => <div 
                        onClick={() => goToFilmPage(search)}
                        className='search-block'>
                            <img src={imgUrl + search.poster_path} />
                            <span>{search.title}</span>
                        </div>)
                    }

                </div>
                : null
            }
        </div>
    )
}

export default SearchBlock