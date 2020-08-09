import React, { Component } from "react";
import API from "../utils/API";
import { SearchBar, BookProfile, NoResultsFound } from "../components/index";

// ========================================================================

const formatBookResults = (googleAPIresults) => {
  const bookArray = [];

  googleAPIresults.map((book) => {
    const formattedBookData = {
      googleId: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors
        ? book.volumeInfo.authors.join(";")
        : "no author(s) listed",
      description: book.volumeInfo.description
        ? book.volumeInfo.description
        : "no description listed",
      image: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : "https://aimint.org/kr/wp-content/uploads/sites/20/2016/04/image-placeholder-vertical.jpg",
      link: book.volumeInfo.canonicalVolumeLink,
      pageCount: book.volumeInfo.pageCount
        ? book.volumeInfo.pageCount
        : "unknown",
      publishDate: book.volumeInfo.publishedDate
        ? book.volumeInfo.publishedDate
        : "not listed",
    };

    bookArray.push(formattedBookData);

    return bookArray;
  });

  return bookArray;
};

// ========================================================================

class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  // ========================================================================

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(`search for ${this.state.search}`);
    API.getGoogleBooks(this.state.search)
      .then((res) => {
        // console.log("google results: ", res.data.items);
        const formattedArray = formatBookResults(res.data.items);
        this.setState({ results: formattedArray });
        // console.log("search results: ", formattedArray);
      })
      .catch((err) => {
        console.log("form submit error", err);
      });
  };

  // ========================================================================

  saveBook = (id) => {
    const selectedBook = this.state.results.find(
      (book) => book.googleId === id
    );

    if (selectedBook !== undefined) {
      // console.log("selected book", selectedBook);

      const bookToSave = {
        googleId: selectedBook.googleId,
        title: selectedBook.title,
        authors: selectedBook.authors,
        description: selectedBook.description,
        image: selectedBook.image,
        link: selectedBook.link,
        pageCount: selectedBook.pageCount,
        publishDate: selectedBook.publishDate,
      };

      // console.log("book to save", bookToSave);

      API.saveBook(bookToSave)
        .then(() => {
          this.setState({
            results: this.state.results.filter(
              (book) => book.googleId !== bookToSave.googleId
            ),
          });
        })
        .catch((err) => {
          console.log("save book error!", err);
        });
    } else {
      console.log("selected book UNDEFINED");
    }
  };

  // ========================================================================

  render() {
    return (
      <>
        <SearchBar
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        {this.state.results.length > 0 ? (
          <BookProfile
            books={this.state.results}
            buttonAction={this.saveBook}
            buttonType="saveBookBtn"
            buttonText=" save book"
            buttonIcon="far fa-bookmark"
          />
        ) : (
          <NoResultsFound />
        )}
      </>
    );
  }
}

export default Search;
