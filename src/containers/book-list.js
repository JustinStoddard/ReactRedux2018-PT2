import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  //Whatever is returned from here will return as props from BooksList
  return {
    books: state.books
  }
}

//Anything returned fro this fnction will return as 'props' from the book-list container.
const mapDispatchToProps = (props) => {
  //Whenever 'selectBook' is called the result should be passed to all of our reducers.
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);