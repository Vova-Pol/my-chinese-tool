import React from 'react';
import { IWord } from '../../models/models';
import './FullFlashcardsList.css';

export default function FullFlashcardsList(props: { wordsList: IWord[] }) {
  const { wordsList } = props;

  return (
    <ul className="flashcards__list">
      {wordsList.map((word) => (
        <li className="flashcards__item" key={word.id}>
          <span className="flashcards__item-character">{word.character}</span>
          <span className="flashcards__item-pinyin">{word.pinyin}</span>
          <span className="flashcards__item-translation">
            {word.translation}
          </span>
        </li>
      ))}
    </ul>
  );
}
