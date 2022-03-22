import './App.css';
import { Route, Routes } from 'react-router-dom'
import StarshipList from './pages/StarshipsList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

function App() {
  const [navItems, setNavItems] = useState([{name: "STAR WARS STARSHIPS"}])
  return (
    <>
    <NavBar navItems={navItems} />
      <Routes>
        <Route path='/' element= {<StarshipList />} />
        <Route path='/ship-details' element={<StarshipDetails />} />
      </Routes>
    </>
  );

}
export default App;
