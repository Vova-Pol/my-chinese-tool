import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main';
import AddWords from '../../pages/AddWords';
import Search from '../../pages/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add-words" element={<AddWords />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
