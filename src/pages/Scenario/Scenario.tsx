import React from 'react';
import './Scenario.css';
import { scenario } from '../../data/scenario';

export const Scenario = () => {
  return (
    <div className="scenario">
      <h1 className="scenario__title">Сценарий</h1>
      <h2 className="scenario__name">《 小欢喜 》</h2>
      <p className="scenario__episode">第01集</p>
      <article>
        {scenario.split('\n\n').map((line, i) => (
          <p className="scenario__paragraph" key={i}>
            {line}
          </p>
        ))}
      </article>
    </div>
  );
};
