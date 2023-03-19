import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPageAC } from '../../redux/FilmsCardReducer'
import "./Pagination.css"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const Pagination = () => {
  const dispatch = useDispatch()
  const pageNumber = useSelector((state) => state.filmsReducer.pageNumber)
  const pageSize = useSelector((state) => state.filmsReducer.pageSize) 
  const currentPage = useSelector((state) => state.filmsReducer.currentPage)
  const portionSize = 10
  const pages = Math.ceil(pageNumber/pageSize)
  const pagesArray = []
  
  for(let i = 1; i <= pages; i++){
    pagesArray.push(i)
  }

  let portionCount = Math.ceil(pages/portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  const chnageCurrentPage = (p) => {
    dispatch(changeCurrentPageAC(p))
  }
  return (
    <div className='pagination'>
      {
        portionNumber > 1 && 
        <button 
        className='prev'
        onClick={() => {setPortionNumber(portionNumber - 1)}}> <AiOutlineArrowLeft /> </button>
      }
      {
        pagesArray
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map(p => {
          return <button 
          onClick={() => chnageCurrentPage(p)}
          className={currentPage === p ? 'pagination-btn-active' : 'pagination-btn'}>{p}</button>
        })
      }
      {
        portionCount > portionNumber && 
        <button 
        className='next'
        onClick={() => {setPortionNumber(portionNumber + 1)}}> <AiOutlineArrowRight /> </button>
      }
    </div>
  )
}

export default Pagination