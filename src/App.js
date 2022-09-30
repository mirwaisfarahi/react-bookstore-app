import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Booklist from './components/BookList';
import Categories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  const counter = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Booklist />} />
          <Route exact path="/Categories" element={<Categories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
