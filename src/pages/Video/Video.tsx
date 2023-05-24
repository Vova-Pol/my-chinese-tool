import React, { useState } from 'react';
import './Video.css';
import { convertTime } from '../../utils/utils';

export default function Video() {
  const [startTime, setStartTime] = useState(convertTime('1:41'));

  return (
    <div className="video">
      <h1 className="video__title">Видео</h1>
      <iframe
        width="720"
        height="405"
        src={`https://www.youtube.com/embed/mTMb8e_gDzE?start=${startTime}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
        frameBorder="0"
        className="video__iframe"
      ></iframe>
    </div>
  );
}
