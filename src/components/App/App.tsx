import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import AddWords from '../../pages/AddWords/AddWords';
import Search from '../../pages/Search/Search';
import Chunks from '../../pages/Chunks/Chunks';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add-words" element={<AddWords />} />
          <Route path="/search" element={<Search />} />
          <Route path="/chunks" element={<Chunks />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
