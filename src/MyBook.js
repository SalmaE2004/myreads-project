import React from 'react'
import ChangeMyShelf from './ChangeMyShelf'

const MyBook = props => {
  const { book, books, changeShelf } = props

  return (
    <li>
      <div className="book">
        <div className="book-top">
<div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${  book.imageLinks && book.imageLinks.thumbnail
    ? book.imageLinks.thumbnail
    : "noCover"})`}}></div>
          <ChangeMyShelf book={book} books={books} changeShelf={changeShelf} />
        </div>
        {book.title&&
        <div className="book-title">{book.title}</div>
      }
        {
        book.authors &&
          book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
      </div>
    </li>
  )
}

export default MyBook
