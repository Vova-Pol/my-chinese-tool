import React, { useEffect, useState } from 'react';
import './Flashcards.css';
import { useParams } from 'react-router-dom';
import FullFlashcardsList from '../../components/FullFlashcardsList/FullFlashcardsList';
import FlashcardsSlider from '../../components/FlashcardsSlider/FlashcardsSlider';
import { api } from '../../utils/api';
import { IChunk } from '../../models/models';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Flashcards() {
  const { _id } = useParams();

  const [wordsList, setWordsList] = useState([]);

  useEffect(() => {
    api
      .getChunks()
      .then((res) => {
        const wordsList = res.data.find(
          (chunk: IChunk) => chunk._id === _id,
        ).wordsList;

        setWordsList(wordsList);
      })
      .catch((err) => {
        // Дебаг
        console.error('Ошибка при запросе на сервер');
        console.error({ err });
      });
  }, [_id]);

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

  //  if (wordsList.length === 0) return <p>Список пуст</p>;

  return (
    <div className="flashcards">
      <h1 className="flashcards__title">Карточки</h1>

      {wordsList.length === 0 ? (
        <AiOutlineLoading3Quarters className="flashcards__loading" />
      ) : (
        <FlashcardsSlider
          wordsList={wordsList}
          hidePinyin={hidePinyin}
          hideTranslation={hideTranslation}
        />
      )}

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
