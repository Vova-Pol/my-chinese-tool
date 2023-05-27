import React from 'react';
import './Flashcard.css';
import { IWord } from '../../models/models';
import { Link, useNavigate } from 'react-router-dom';
import { BKRS_SEARCH_URL } from '../../utils/constants';

const Flashcard: React.FC<IWord> = ({ character, id, pinyin, translation }) => {
  const navigate = useNavigate();

  const handleOnSearch: React.MouseEventHandler<HTMLButtonElement> = (
    evt: React.MouseEvent,
  ) => {
    evt.preventDefault();
    navigate(`/search/${character}`);
  };

  return (
    <li className="flashcards-list__item">
      <span className="flashcards-list__item-character">{character}</span>
      <span className="flashcards-list__item-pinyin">{pinyin}</span>
      <span className="flashcards-list__item-translation">{translation}</span>
      <div className="flashcards-list__button-container">
        <Link
          to={BKRS_SEARCH_URL + character}
          target="_blank"
          className="flashcards-list__bkrs-button flashcards-list__button"
        ></Link>
        <Link
          to={`/search/${character}`}
          target="_blank"
          className="flashcards-list__search-button flashcards-list__button"
        ></Link>
        <button
          type="button"
          className="flashcards-list__edit-button flashcards-list__button"
        ></button>
      </div>
    </li>
  );
};

export default Flashcard;
