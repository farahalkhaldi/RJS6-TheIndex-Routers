import React, {Component} from 'react';

//Components
import SearchBar from './SearchBar'
import BookRow from './BookRow'
import BookTable from './BookTable'

class BookList extends Component {
    state = {
      filteredBooks: this.props.books
    };
  
    filterBooks = query => {
      query = query.toLowerCase();
      let filteredBooks = this.props.books.filter(book =>
        `${book.title}`.toLowerCase().includes(query)
      );
      this.setState({  filteredBooks: filteredBooks });
    };
  
    render() {
  
      return (
        <div>
          <h3>Books</h3>
          <SearchBar onChange={this.filterBooks} />
          <BookTable books={this.state.filteredBooks}/>
          <div className="row">{BookRow}</div>
        </div>
      );
    }
  }

export default BookList;

