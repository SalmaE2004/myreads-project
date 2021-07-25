import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import MyBook from './MyBook'
import * as BooksAPI from './BooksAPI'

class Search extends Component {
   state = {
    newBooks: [],
    input: ''
  }

  getBooks = event => {
    const input = event.target.value
    this.setState({ input })
    if (input) {
      BooksAPI.search(input,30).then(books => {
      if( books.length > 0)
           this.setState({ newBooks: books })
      else this.setState({ newBooks: []})
      })
    } else this.setState({ books: [] })//if there no search results for this input
  }

  render() {
    const {  newBooks,input} = this.state
    const { books, changeShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={input}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {newBooks.length > 0 && (
            <div>
              <ol className="books-grid">
                {newBooks.map(item => (
                  <MyBook changeShelf={changeShelf}   key={item.id} book={item}   books={books}  />
                ))}
              </ol>
            </div>
          )}
          {newBooks.length===0 && input!==""&&(
            <h3>Can't find a book title or author matches your input!</h3>
          )}
          {newBooks.length>0 && (
            <h3>{newBooks.length} books have been found </h3>
          )}
        </div>
      </div>
    )
  }
  static propTypes = {
    books: PropTypes.array.isRequired

  }
}

export default Search
