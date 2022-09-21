import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import BooksList from './components/BooksList';
import Catagories from './components/Categories';
import Navigation from './components/Navigation';

function App() {
  const counter = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h1>{counter}</h1>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<BooksList />} />
          <Route exact path="/Catagories" element={<Catagories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
