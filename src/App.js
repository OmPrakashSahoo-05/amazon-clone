import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from './Header';
import Login from './Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='login' element={<Login/>} ></Route>
          <Route path="/" element={<div> <Header/> <Home/> </div>}>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
