import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import './Chunks.css';

export default function Chunks() {
  const { wordsChunks } = useAppSelector((state) => state.progress);

  return (
    <div className="chunks">
      <h1 className="chunks__title">Эпизоды</h1>
      <ul className="chunks__list">
        {wordsChunks.map((chunk, i) => (
          <li className="chunks__item" key={i}>
            {chunk.slice(0, 3).map((word, i) => (
              <div className="chunks__word-container" key={i}>
                <span className="chunks__character">{word.character}</span>
                <span className="chunks__pinyin">{word.pinyin}</span>
              </div>
            ))}
            <span className="chunks__words-amount">
              Всего слов: {chunk.length}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
