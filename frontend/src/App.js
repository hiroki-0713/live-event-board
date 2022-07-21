import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './containers/Header.jsx';
import { Main } from './containers/Main.jsx';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
