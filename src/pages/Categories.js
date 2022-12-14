import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBook } from '../redux/categories/categories';
import '../assets/Styles/categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.category);

  const checkStatusCategory = () => {
    dispatch(checkBook());
  };
  return (
    <div className="cati">
      <button className="button" type="button" onClick={checkStatusCategory}>
        Check status
      </button>
      <div>{message}</div>
    </div>
  );
};

export default Categories;
