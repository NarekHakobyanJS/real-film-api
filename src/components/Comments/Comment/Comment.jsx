import React from 'react'
import { useSelector } from 'react-redux'
import "./Comment.css"

const Comment = () => {
    const comment = useSelector((state) => state.comments.comment)
    console.log(comment);
  return (
    <div className='comment'>
        <h3>Name : {comment.userName} </h3>
        <p>Comment : {comment.comment}</p>
    </div>
  )
}

export default Comment