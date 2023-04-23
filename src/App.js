import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/pokemon/:id' element={<PokemonPage />} />
    </Routes> 
  );
}

export default App;
