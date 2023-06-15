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
  const [hideTranslation, setHideTranslation] = useState(false);
  const [hidePinyin, setHidePinyin] = useState(false);

  function handleShowFullList() {
    setIsFullListShown(!isFullListShown);
  }

  function handleHideTranslation() {
    setHideTranslation(!hideTranslation);
  }

  function handleHidePinyin() {
    setHidePinyin(!hidePinyin);
  }

  return (
    <div className="flashcards">
      <h1 className="flashcards__title">Карточки</h1>

      <FlashcardsSlider
        wordsList={wordsList}
        hidePinyin={hidePinyin}
        hideTranslation={hideTranslation}
      />

      <div className="flashcards__quiz-mode-container">
        <label className="flashcards__quiz-mode" htmlFor="hide-translation">
          Скрыть перевод
        </label>
        <input
          className="flashcards__quiz-mode-input"
          type="checkbox"
          id="hide-translation"
          onClick={handleHideTranslation}
        ></input>
      </div>
      <div className="flashcards__quiz-mode-container">
        <label className="flashcards__quiz-mode" htmlFor="hide-pinyin">
          Скрыть пиньинь
        </label>
        <input
          className="flashcards__quiz-mode-input"
          type="checkbox"
          id="hide-pinyin"
          onClick={handleHidePinyin}
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
