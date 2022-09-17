import React from 'react';
import AddBook from './AddBook';
import BookCard from './BookCard';

function BooksList() {
  
  const retrieveBook = <BookCard title="Java Programming" author="Andrew High" />;

  return (
    <div>
      <h1>Books</h1>
      {retrieveBook}
      <AddBook />
    </div>
  );
}

export default BooksList;
