import React, { useEffect, useRef, useState } from 'react';
import './FlashcardsSlider.css';
import { IWord } from '../../models/models';
import {
  LEFT_ARROW_KEY_CODE,
  RIGHT_ARROW_KEY_CODE,
  SPACE_KEY_CODE,
} from '../../utils/constants';

export default function FlashcardsSlider(props: { wordsList: IWord[] }) {
  const { wordsList } = props;

  const [shownCard, _setShownCard] = useState(wordsList[0]);
  const shownCardRef = useRef(shownCard);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    _setShownCard(wordsList[0]);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleKeyDown(evt: KeyboardEvent) {
    switch (evt.keyCode) {
      case RIGHT_ARROW_KEY_CODE:
        evt.preventDefault();
        setShownCard(wordsList[wordsList.indexOf(shownCardRef.current) + 1]);
        break;

      case LEFT_ARROW_KEY_CODE:
        evt.preventDefault();
        setShownCard(wordsList[wordsList.indexOf(shownCardRef.current) - 1]);
        break;

      case SPACE_KEY_CODE:
        evt.preventDefault();
        setShownCard(wordsList[wordsList.indexOf(shownCardRef.current) + 1]);
        break;
    }
  }

  function handleRightClick(evt: React.MouseEvent<HTMLElement>) {
    setShownCard(wordsList[wordsList.indexOf(shownCard) + 1]);
  }

  function handleLeftClick(evt: React.MouseEvent<HTMLElement>) {
    setShownCard(wordsList[wordsList.indexOf(shownCard) - 1]);
  }

  function setShownCard(card: IWord) {
    shownCardRef.current = card;
    _setShownCard(card);
  }
  console.log('rendered');
  console.log({ shownCard: shownCard.character });
  console.log({ ref: shownCardRef.current.character });
  return (
    <div className="flashcards-slider">
      <button
        className="flashcards-slider__arrow-button"
        onClick={handleLeftClick}
      >
        &#8592;
      </button>
      <div className="flashcards-slider__card">
        <span className="flashcards-slider__chatacter">
          {shownCard.character}
        </span>
        <span className="flashcards-slider__pinyin">{shownCard.pinyin}</span>
        <span className="flashcards-slider__translation">
          {shownCard.translation}
        </span>
      </div>
      <button
        className="flashcards-slider__arrow-button"
        onClick={handleRightClick}
      >
        &#8594;
      </button>
    </div>
  );
}
