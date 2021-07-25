import React from 'react'
import MyShelf from './MyShelf'

const MyList = props => {
   const { books, changeShelf } = props
    return (
    <div className="list-books-content">
      { [
        { id: 'currentlyReading', name: 'Currently Reading' },
        { id: 'wantToRead', name: 'Want to Read' },
        { id: 'read', name: 'Read' }
      ].map((shelf) => {
        const shelfBooks = books.filter(book => book.shelf === shelf.id)
        return (
          <div className="bookshelf" key={shelf.id}>
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              <MyShelf books={shelfBooks} changeShelf={changeShelf} />
           </div>
          </div>
                )
                })}
        </div>
       )
       }


export default MyList
