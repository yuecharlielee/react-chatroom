
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sign_in from './components/Sign_in';
import Chatroom from './components/Chatroom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Sign_in />} path='/'></Route>
        <Route element={<Chatroom />} path='/chatroom'></Route>
      </Routes>
    </Router>

  );
}


export default App;