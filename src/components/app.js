import React, { Component } from "react";
import Books from "../containers/books_container";
import BookDetail from '../containers/book_detail_container';
export default class App extends Component {
  render() {
    return (
      <div>
        <Books />
        <BookDetail/>
      </div>
    );
  }
}
