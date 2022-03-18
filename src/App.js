import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import StarshipList from './pages/StarshipsList/StarshipList';
import StarshipDetails from './pages/StarshipsList/StarshipList';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </>
  );
}

export default App;