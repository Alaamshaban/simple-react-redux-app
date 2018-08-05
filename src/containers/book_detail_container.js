import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.selectedBook) {
      return <div>No Books selected !! Please Select One</div>;
    }
    return (
      <div>
        <h3>Details For:</h3>
        <li>{this.props.selectedBook.title}</li>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    selectedBook: state.selectedBook
  };
}
export default connect(mapStateToProps)(BookDetail);
