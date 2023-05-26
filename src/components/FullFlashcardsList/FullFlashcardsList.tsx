import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IWord } from '../../models/models';
import './FullFlashcardsList.css';
import { BKRS_SEARCH_URL } from '../../utils/constants';

interface IFullFlashcardsListProps {
  wordsList: IWord[];
}

const FullFlashcardsList: React.FC<IFullFlashcardsListProps> = ({
  wordsList,
}) => {
  const navigate = useNavigate();

  return (
    <ul className="flashcards__list">
      {wordsList.map((word) => (
        <li className="flashcards__item" key={word.id}>
          <span className="flashcards__item-character">{word.character}</span>
          <span className="flashcards__item-pinyin">{word.pinyin}</span>
          <span className="flashcards__item-translation">
            {word.translation}
          </span>
          <div className="flashcards__button-container">
            <Link
              to={BKRS_SEARCH_URL + word.character}
              target="_blank"
              type="button"
              className="flashcards__bkrs-button flashcards__button"
            ></Link>
            <button
              type="button"
              className="flashcards__search-button flashcards__button"
            ></button>
            <button
              type="button"
              className="flashcards__edit-button flashcards__button"
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FullFlashcardsList;
