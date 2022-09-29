const ADD_BOOK = 'books/books/ADD';
const REMOVE_BOOK = 'books/books/REMOVE';

const initialState = {
  bookList: [
    {
      id: 1,
      title: 'Java Programming',
      author: 'Franklin'
    },

    {
      id: 2,
      title: 'Java Programming',
      author: 'Franklin'
    }
  ],
};

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        bookList: [...state.bookList, action.payload],
      };
    case REMOVE_BOOK:
      return {
        bookList: state.bookList.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};

export default booksReducer;
