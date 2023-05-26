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
    <li className="flashcards__item">
      <span className="flashcards__item-character">{character}</span>
      <span className="flashcards__item-pinyin">{pinyin}</span>
      <span className="flashcards__item-translation">{translation}</span>
      <div className="flashcards__button-container">
        <Link
          to={BKRS_SEARCH_URL + character}
          target="_blank"
          type="button"
          className="flashcards__bkrs-button flashcards__button"
        ></Link>
        <button
          onClick={handleOnSearch}
          type="button"
          className="flashcards__search-button flashcards__button"
        ></button>
        <button
          type="button"
          className="flashcards__edit-button flashcards__button"
        ></button>
      </div>
    </li>
  );
};

export default Flashcard;
