export function selectBook(book) {
  //selectBook is an action creator it needs to return an action which is an object with type property
  return {
    type: "BOOK_SELECTED",
    payload:book
  };
}
