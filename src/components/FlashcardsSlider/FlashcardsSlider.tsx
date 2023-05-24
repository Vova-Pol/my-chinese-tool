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

  function setShownCard(card: IWord) {
    shownCardRef.current = card;
    _setShownCard(card);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    _setShownCard(wordsList[0]);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleKeyDown(evt: KeyboardEvent) {
    const nextCard = wordsList[wordsList.indexOf(shownCardRef.current) + 1];
    const prevCard = wordsList[wordsList.indexOf(shownCardRef.current) - 1];
    const firstCard = wordsList[0];
    const lastCard = wordsList[wordsList.length - 1];

    const isFirstCard = shownCardRef.current === firstCard;
    const isLastCard = shownCardRef.current === lastCard;

    switch (evt.keyCode) {
      case RIGHT_ARROW_KEY_CODE:
      case SPACE_KEY_CODE:
        evt.preventDefault();
        setShownCard(isLastCard ? firstCard : nextCard);
        break;

      case LEFT_ARROW_KEY_CODE:
        evt.preventDefault();
        setShownCard(isFirstCard ? lastCard : prevCard);
        break;
    }
  }

  function handleRightClick(evt: React.MouseEvent<HTMLElement>) {
    const isLastCard = shownCard === wordsList[wordsList.length - 1];
    const nextCard = wordsList[wordsList.indexOf(shownCard) + 1];
    const firstCard = wordsList[0];

    setShownCard(isLastCard ? firstCard : nextCard);
  }

  function handleLeftClick(evt: React.MouseEvent<HTMLElement>) {
    const prevCard = wordsList[wordsList.indexOf(shownCard) - 1];
    const isFirstCard = shownCard === wordsList[0];
    const lastCard = wordsList[wordsList.length - 1];

    setShownCard(isFirstCard ? lastCard : prevCard);
  }

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
