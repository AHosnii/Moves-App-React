
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesPage from './pages/MoviesPage';
import ActorsPage from './pages/ActorsPage';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import MyNavbar from './components/MyNavbar';

const App = () => {
  return (
    
    <Router>
    <MyNavbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/actors" element={<ActorsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
