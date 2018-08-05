import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class Books extends Component {
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.props.books.map(book => {
          return (
            <li onClick={()=>this.props.selectBook(book)} key={book.id} className="list-group-item">
              {book.title}
            </li>
          );
        })}
      </ul>
    );
  }
}

//This function is the glue between react and redux
function mapStateToProps(state) {
  //whatever is returned from here will show up as props inside Books Container
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as prps on Books contailner
function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all of reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Connect will take component and this mapStateToProps function and return a container
//A container is a component which is aware of state of redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
