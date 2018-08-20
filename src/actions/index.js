export const selectBook = (book) => {
  //Add selctBook is an action creator and needs to return an action. An object with a type property.
  return { 
    type: 'BOOK_SELECTED', //This is the value of the object.
    payload: book //This is the Payload of the object.
  }
}