import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkBook } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleChangeStatus = () => dispatch(checkBook());
  const status = useSelector((state) => state.categoriesReducer);

  return (
    <div className="categoriesContainer">
      <h2>{status}</h2>
      <button type="button" onClick={handleChangeStatus}>CHECK STATUS</button>
    </div>
  );
};

export default Categories;
