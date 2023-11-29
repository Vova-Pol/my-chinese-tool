import React from 'react';
import './Progress.css';
import { AIM_AMOUNT } from '../../utils/constants';

export default function Progress() {
  // const { wordsChunks } = useAppSelector((state) => state.progress);
  const wordsChunks: any = [];

  const totalProgress = wordsChunks.reduce((acc: any, chunk: any) => {
    return acc + chunk.wordsList.length;
  }, 0);

  const totalProgressPercentage = (totalProgress / AIM_AMOUNT) * 100;
  const percentageLeft = 100 - totalProgressPercentage;

  return (
    <section className="progress">
      <div className="progress__info">
        <span className="progress__total">
          Всего выучено: {totalProgress} иероглифов
        </span>
        <span className="progress__aim">Цель: {AIM_AMOUNT} иероглифов</span>
      </div>
      <div className="progress__done">
        <div
          className="progress__left"
          style={{ width: `${percentageLeft}%` }}
        ></div>
      </div>
    </section>
  );
}
