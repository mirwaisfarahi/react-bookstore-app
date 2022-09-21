const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const initialState = {
  message: [],
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
  payload: 'Under Construction',
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return [...state.message, action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
