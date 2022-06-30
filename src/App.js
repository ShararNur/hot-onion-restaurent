import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import MenuItem from './components/MenuItem/MenuItem';
import Login from './components/Login/Login';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import OrderComplete from './components/OrderComplete/OrderComplete';
import { CartProvider } from "react-use-cart";
import Cart from './components/ShoppingCart/Cart';
import { createContext, useState } from 'react';

export const NewUserContext = createContext()
export const CurrentUserContext = createContext()


function App() {
  const [newUser, setNewUser] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
      <NewUserContext.Provider value={[newUser, setNewUser]}>
        <CurrentUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/breakfast" element={<Home />} />
              <Route path="/lunch" element={<Home />} />
              <Route path="/dinner" element={<Home />} />
              <Route path="/breakfast/:id" element={<MenuItem />} />
              <Route path="/lunch/:id" element={<MenuItem />} />
              <Route path="/dinner/:id" element={<MenuItem />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<Login />} />
              <Route path="/placeOrder" element={<PlaceOrder />} />
              <Route path="/orderComplete" element={<OrderComplete />} />
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          </CartProvider>
        </CurrentUserContext.Provider>
      </NewUserContext.Provider>
    </div>
  );
}

export default App;
