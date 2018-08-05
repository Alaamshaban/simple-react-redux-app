import { combineReducers } from "redux";
import BooksReducer from "./books_reducer";
import SelectedBook from "./selected_book_reducer";

const rootReducer = combineReducers({
  //the stae is passed as an argument for booksReducer is the state is previously genereated by booksReducer
  books: BooksReducer,
  selectedBook: SelectedBook
});

export default rootReducer;
