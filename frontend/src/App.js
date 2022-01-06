import './App.css'

import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Navigation from './components/shared/Navigation/Navigation';
import Home from './pages/Home/Home';

function App() {
  return (
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} exact ></Route> 
        </Routes>
      </BrowserRouter>
  );
}

export default App;
