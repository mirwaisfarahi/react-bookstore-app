import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const removeBookFromStor = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>

      <p>
        author :
        {author}
      </p>
      <h4>
        title :
        {title}
      </h4>
      <p>
        category :
        {category}
      </p>
      <button type="button" onClick={removeBookFromStor}>
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
