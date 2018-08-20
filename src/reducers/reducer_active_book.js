//State argument is not application state, only the state is responsilble for this reducer. 
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload; //Always return a fresh object. Not this.state.payload (EX)
  }
  return state;
}