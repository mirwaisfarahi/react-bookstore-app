const CHECK_STATUS = 'bookStore/categories/CHECK_STATUS';

const categories = [];

// Reducer
const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Contruction';
    default:
      return state;
  }
};

// ActionsTypes
export const checkStatus = () => ({ type: CHECK_STATUS });

export default categoriesReducer;
