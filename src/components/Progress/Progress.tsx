import React from 'react';
import './Progress.css';
import { AIM_AMOUNT } from '../../utils/constants';
import { useAppSelector } from '../../hooks/redux';

export default function Progress() {
  const { progress } = useAppSelector((state) => state);

  const totalProgress = progress.wordsChunks.reduce((acc, wordsArr) => {
    return acc + wordsArr.length;
  }, 0);

  const totalProgressPercentage = (totalProgress / AIM_AMOUNT) * 100;

  return (
    <div className="progress">
      <div className="progress__info">
        <span className="progress__total">
          Всего выучено: {totalProgress} иероглифов
        </span>
        <span className="progress__aim">Цель: {AIM_AMOUNT} иероглифов</span>
      </div>
      <div className="progress__graphics">
        <div
          className="progress__done"
          style={{ width: `${totalProgressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
