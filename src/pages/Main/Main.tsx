import React from 'react';
import './Main.css';
import Progress from '../../components/Progress/Progress';

export default function Main() {
  return (
    <div className="main">
      <h1 className="main__title">今天学了中文</h1>
      <span className="main__subtitle">进了一步。</span>
      <Progress />
    </div>
  );
}
