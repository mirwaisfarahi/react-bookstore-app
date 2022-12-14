import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import store from './redux/configureStore';
import './assets/Styles/App.css';

const App = () => (
  <>
    <div className="main">
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Provider>
    </div>
  </>
);

export default App;
