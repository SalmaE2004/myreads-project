import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MyList from './MyList'
import { Route,Link } from 'react-router-dom'
import Search from './Search'

class BooksApp extends React.Component {
  state = { books: [] }
  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))//udacity course contacts app
  }
  changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf).then(response => {
      changedBook.shelf = shelf
      this.setState(prevState => ({
      books: prevState.books.filter(book => book.id !== changedBook.id).concat(changedBook)//udacity contacts project
      }))
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
          <Route
            path="/search"
            render={({history}) => (
              <Search books={books} changeShelf={this.changeShelf} onSearch={(book)=>{this.search(book);history.push('/')}} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <MyList books={books} changeShelf={this.changeShelf} />
                <div className="open-search">
                <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
      </div>
    )
  }
}

export default BooksApp
