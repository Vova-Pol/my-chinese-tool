import React from 'react';
import { IWord } from '../../models/models';
import './FullFlashcardsList.css';
import Flashcard from '../Flashcard/Flashcard';

interface IFullFlashcardsListProps {
  wordsList: IWord[];
}

const FullFlashcardsList: React.FC<IFullFlashcardsListProps> = ({
  wordsList,
}) => {
  return (
    <ul className="flashcards-list">
      {wordsList.map((word) => (
        <Flashcard key={word._id} {...word} />
      ))}
    </ul>
  );
};

export default FullFlashcardsList;
