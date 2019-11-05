import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Cart from './Cart';
import Store from './Store'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Route exact path="/" component={Store}/>
        <Route path="/cart" component={Cart}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
