import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import Login from './commponents/login/Login';
import Navbar from  './commponents/navbar/Navbar';
import Men from './commponents/men/Men';
import Women from './commponents/women/Women';
import About from './commponents/about/About';
import Main from './commponents/main/Main';
import Cart from './commponents/cart/Cart';
import Buy from './commponents/Buy/Buy';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Navbar' element={<Navbar />} />
          <Route path='/' element={<Main />} />
          <Route path='/men' element={<Men />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Women' element={<Women />} />
          <Route path='/About' element={<About />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Buy' element={<Buy />} />
        </Routes>
      </BrowserRouter>
    </div>  
    </>
  );
}

export default App;
