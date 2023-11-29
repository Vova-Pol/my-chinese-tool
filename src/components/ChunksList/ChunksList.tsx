import React, { useEffect, useState } from 'react';
import './ChunksList.css';
import { IChunk, IWord } from '../../models/models';
import { api } from '../../utils/api';

interface IChunksListProps {
  handleOnChunk: (chunk: IChunk) => void;
  chunks: IChunk[];
}

export const ChunksList: React.FC<IChunksListProps> = ({
  handleOnChunk,
  chunks,
}) => {
  return (
    <ul className="chunks-list__list">
      {chunks ? (
        chunks.map((chunk, i) => (
          <li
            className="chunks-list__item"
            key={chunk._id}
            onClick={() => {
              handleOnChunk(chunk);
            }}
          >
            {chunk.wordsList.slice(0, 3).map((word: IWord) => (
              <div className="chunks-list__word-container" key={word._id}>
                <span className="chunks-list__character">{word.character}</span>
                <span className="chunks-list__pinyin">{word.pinyin}</span>
              </div>
            ))}
            <span className="chunks-list__words-amount">
              Всего слов: {chunk.wordsList.length}
            </span>
            <div className="chunks-list__order">{i + 1}</div>
          </li>
        ))
      ) : (
        <p>Добавьте новый спикок слов</p>
      )}
    </ul>
  );
};
