import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from '../../pages/Main/Main';
import AddWords from '../../pages/AddWords/AddWords';
import Search from '../../pages/Search/Search';
import Chunks from '../../pages/Chunks/Chunks';
import Flashcards from '../../pages/Flashcards/Flashcards';
import Video from '../../pages/Video/Video';
import { Scenario } from '../../pages/Scenario/Scenario';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/add-words" element={<AddWords />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:character" element={<Search />} />
          <Route path="/chunks" element={<Chunks />} />
          <Route path="/chunks/:id" element={<Flashcards />} />
          <Route path="/video" element={<Video />} />
          <Route path="/scenario" element={<Scenario />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
