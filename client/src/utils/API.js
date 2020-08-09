import axios from "axios";

export default {
  // get books from the Google API
  getGoogleBooks: function (userSearch) {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${userSearch}`
    );
  },
  // get user's saved books from database
  getSavedBooks: function () {
    return axios.get(`/api/books`);
  },
  // get a book based on ID
  getBookById: function (id) {
    return axios.get(`/api/books/${id}`);
  },
  // save a book to the database
  saveBook: function (bookData) {
    return axios.post(`/api/books`, bookData);
  },
  // delete a book from the database, based on ID
  deleteBook: function (id) {
    return axios.delete(`/api/books/${id}`);
  },
};
