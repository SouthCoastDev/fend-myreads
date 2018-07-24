import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import MainPage from './MainPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books : books })
    })
  }

  changeShelf = (book,shelf) => {
     BooksAPI.update(book,shelf)
     //call books again to update page.
     BooksAPI.getAll().then((books) => {
      this.setState({ books : books })
    })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">

        <MainPage
          books={this.state.books}
          changeShelf = {this.changeShelf}
        />

      </div>
    )
  }
}

export default BooksApp
