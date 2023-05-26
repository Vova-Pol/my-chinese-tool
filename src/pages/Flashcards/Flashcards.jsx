import React, { useState } from 'react';
import './Flashcards.css';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import FullFlashcardsList from '../../components/FullFlashcardsList/FullFlashcardsList';
import FlashcardsSlider from '../../components/FlashcardsSlider/FlashcardsSlider';

export default function Flashcards() {
  const { id } = useParams();

  const { wordsChunks } = useAppSelector((state) => state.progress);
  const [wordsList, setWordsList] = useState(
    wordsChunks.find((chunk) => chunk.id === Number(id)).wordsList,
  );

  const [isFullListShown, setIsFullListShown] = useState(false);
  const [isQuizMode, setIsQuizMode] = useState(false);

  function handleShowFullList() {
    setIsFullListShown(!isFullListShown);
  }

  function handleQuizMode() {
    setIsQuizMode(!isQuizMode);
  }

  console.log(wordsList);
  return (
    <div className="flashcards">
      <h1 className="flashcards__title">Карточки</h1>

      <FlashcardsSlider wordsList={wordsList} isQuizMode={isQuizMode} />

      <div className="flashcards__quiz-mode-container">
        <label className="flashcards__quiz-mode" htmlFor="quiz-mode">
          Режим диктанта
        </label>
        <input
          className="flashcards__quiz-mode-input"
          type="checkbox"
          id="quiz-mode"
          onClick={handleQuizMode}
        ></input>
      </div>

      <button
        className="flashcards__show-list-button"
        onClick={handleShowFullList}
      >
        {!isFullListShown ? 'Показать весь список' : 'Скрыть список'}
      </button>

      {isFullListShown && <FullFlashcardsList wordsList={wordsList} />}
    </div>
  );
}
