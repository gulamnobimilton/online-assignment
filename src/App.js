import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Cart from './components/cart/Cart';
import Items from './components/items/Items';

function App() {
  return (
    <div>
<Header></Header>
<Cart></Cart>
<Items></Items>
    </div>
  );
}

export default App;
