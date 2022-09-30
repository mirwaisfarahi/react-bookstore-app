import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import BookCard from './BookCard';
import Categories from './Categories';

function BooksList() {
  const books = useSelector((state) => state.booksReducer);

  const retrieveBook = books.map((book) => (
    <BookCard
      key={book.id}
      id={book.id}
      title={book.title}
      author={book.author}
    />
  ));

  return (
    <div>
      <h1>Books</h1>
      {retrieveBook}
      <AddBook />
      <Categories />
    </div>
  );
}

export default BooksList;
