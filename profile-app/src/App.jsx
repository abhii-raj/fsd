import React from 'react'
import Book from './assets/book.jsx';
import "./App.css";
import data from  "./data.json";
const App = () => {
  
  return (
    <div>
      <h1>Library</h1>
      {data && data.length > 0 ? (
        data.map((book, index) => (
          <Book 
            key={index} 
            title={book.title} 
            author={book.author} 
            description={book.description} 
            price={book.price} 
          />
        ))
      ) : (
        <p>No books available.</p>
      )}
    </div>
  )
}

export default App

