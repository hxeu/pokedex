import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';


const App = () => {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path='/pokemon/:id' element={<PokemonPage />} />
        </Routes>
    </Router> 
  );
}

export default App;
