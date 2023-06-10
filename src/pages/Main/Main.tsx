import React from 'react';
import './Main.css';
import Progress from '../../components/Progress/Progress';
import { Profile } from '../../components/Profile/Profile';
import { LastAdded } from '../../components/LastAdded/LastAdded';

export default function Main() {
  return (
    <div className="main">
      <h1 className="main__title">今天学了中文</h1>
      <span className="main__subtitle">进了一步。</span>
      <Profile />
      <Progress />
      <LastAdded />
    </div>
  );
}
