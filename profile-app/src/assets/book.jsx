import React from 'react'
import './book.css';

export const book = (props) => {
  return (
    <div className='book'>
        <h2>Title : {props.title}</h2>
        <p>Author : {props.author}</p>
        <p>Description : {props.description}</p>
        <p>Price : {props.price}</p>
    </div>

  )
}

export default book;
