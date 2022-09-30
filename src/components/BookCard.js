import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookCard = ({ id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <p>
          {title}
          :
          {' '}
          {author}
        </p>
        <div>
          <div />
          <p>20% Completed</p>
        </div>
        <div>
          <p>CURRENT CHAPTER: Chapter 2</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
        <ul>
          <li>Comments</li>
          <li>
            <button type="button" onClick={() => dispatch(removeBook(id))}>
              Remove
            </button>
          </li>
          <li>Edit</li>
        </ul>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BookCard;
