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

  console.log(wordsList);
  return (
    <div className="flashcards">
      <h1 className="flashcards__title">Карточки</h1>
      <FlashcardsSlider wordsList={wordsList} />
      <button
        className="flashcards__show-list-button"
        onClick={() => {
          setIsFullListShown(!isFullListShown);
        }}
      >
        Показать весь список
      </button>
      {isFullListShown && <FullFlashcardsList wordsList={wordsList} />}
    </div>
  );
}
