import React from 'react';
import PropTypes from 'prop-types';

function BookCard(props) {
  const { title, author } = props;

  return (
    <div>
      <li>

        {title}
        :
        {author}
      </li>
      <button type="button"> Remove</button>
    </div>
  );
}

BookCard.propTypes = ({
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
});

export default BookCard;
