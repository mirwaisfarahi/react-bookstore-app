import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../assets/Styles/books.css';

const Book = ({
  id, title, author, category,
}) => {
  const [values, setValues] = useState('remove');
  const [num, setNum] = useState(0);

  const dispatch = useDispatch();
  const removeBookFromStor = () => {
    dispatch(removeBook(id));
    setValues('removing');
  };

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNum(randomNumberInRange(50, 100));
  };

  return (
    <div className="card">
      <div>
        <p className="category">{category}</p>
        <h1 className="title">{title}</h1>
        <p className="author">{author}</p>
        <div className="card-add">
          <p> comments</p>
          <hr />
          <button type="button" onClick={removeBookFromStor}>
            {values}
          </button>
          <hr />
          <p>Edit</p>
        </div>
      </div>
      <div className="completed">
        <div className="panel-bg">
          <hr />
        </div>
        <div className="completed-num">
          <h1>
            {num}
            %
          </h1>
          <p>Completed</p>
        </div>
        <hr className="line-2" />
        <div className="progress">
          <p>CURRENT CHAPTER</p>
          <button type="button" onClick={handleClick}>update Progress</button>
        </div>
      </div>
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
