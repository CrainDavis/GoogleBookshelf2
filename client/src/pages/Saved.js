import React, { Component } from "react";
import { BookProfile, NoResultsFound } from "../components/index";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: [],
  };

  loadSavedBooks = () => {
    API.getSavedBooks()
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log("load books error", err));
  };

  deleteBook = (id) => {
    API.deleteBook(id)
      .then((res) => this.loadSavedBooks())
      .catch((err) => console.log("could not delete book", err));
  };

  componentDidMount() {
    this.loadSavedBooks();
  }

  render() {
    return (
      <div>
        {this.state.books.length > 0 ? (
          <BookProfile
            books={this.state.books}
            buttonAction={this.deleteBook}
            buttonType="deleteBookBtn"
            buttonText=" delete book"
            buttonIcon="fas fa-trash-alt"
          />
        ) : (
          <NoResultsFound />
        )}
      </div>
    );
  }
}

export default Saved;
