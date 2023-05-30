import React from 'react';
import './ChunksList.css';
import { useAppSelector } from '../../hooks/redux';
import { IChunk } from '../../models/models';

interface IChunksListProps {
  handleOnChunk: (chunk: IChunk) => void;
}

export const ChunksList: React.FC<IChunksListProps> = ({ handleOnChunk }) => {
  const { wordsChunks } = useAppSelector((state) => state.progress);

  return (
    <ul className="chunks-list__list">
      {wordsChunks.map((chunk, i) => (
        <li
          className="chunks-list__item"
          key={i}
          onClick={() => {
            handleOnChunk(chunk);
          }}
        >
          {chunk.wordsList.slice(0, 3).map((word, i) => (
            <div className="chunks-list__word-container" key={i}>
              <span className="chunks-list__character">{word.character}</span>
              <span className="chunks-list__pinyin">{word.pinyin}</span>
            </div>
          ))}
          <span className="chunks-list__words-amount">
            Всего слов: {chunk.wordsList.length}
          </span>
          <div className="chunks-list__order">{i + 1}</div>
        </li>
      ))}
    </ul>
  );
};
