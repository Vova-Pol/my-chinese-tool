import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import './Chunks.css';

export default function Chunks() {
  const { wordsChunks } = useAppSelector((state) => state.progress);
  const navigate = useNavigate();

  return (
    <div className="chunks">
      <h1 className="chunks__title">Эпизоды</h1>
      <ul className="chunks__list">
        {wordsChunks.map((chunk, i) => (
          <li
            className="chunks__item"
            key={i}
            onClick={() => {
              navigate(`/chunks/${chunk.id}`);
            }}
          >
            {chunk.wordsList.slice(0, 3).map((word, i) => (
              <div className="chunks__word-container" key={i}>
                <span className="chunks__character">{word.character}</span>
                <span className="chunks__pinyin">{word.pinyin}</span>
              </div>
            ))}
            <span className="chunks__words-amount">
              Всего слов: {chunk.wordsList.length}
            </span>
            <div className="chunks__order">{i + 1}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
