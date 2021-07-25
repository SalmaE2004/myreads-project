import React from 'react'
import MyBook from './MyBook'

 const MyShelf = props => {
  const { books, changeShelf } = props
    return (
      <ol className="books-grid">
        {books.map(book => (
          <MyBook
            book={book}
            books={books}
            key={book.id}
            changeShelf={changeShelf}
          />
        ))}
      </ol>
    )
  }

export default MyShelf
