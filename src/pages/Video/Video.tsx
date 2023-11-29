import React, { useEffect, useState } from 'react';
import './Video.css';
import { convertTime } from '../../utils/utils';
import { ChunksList } from '../../components/ChunksList/ChunksList';
import { IChunk } from '../../models/models';
import { api } from '../../utils/api';
import { FiPlusCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Video() {
  const [startTime, setStartTime] = useState(convertTime('1:41'));
  const [chunks, setChunks] = useState<IChunk[]>([]);

  useEffect(() => {
    api
      .getChunks()
      .then((res) => {
        if (res.data) setChunks(res.data);
      })
      .catch((err) => {
        console.error({ err });
      });
  }, []);

  function handleChunkOnClick(chunk: IChunk) {
    setStartTime(convertTime(chunk.startTime));
  }

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
      {chunks.length === 0 ? (
        <Link to="/add-words" className="video__suggest">
          <FiPlusCircle className="video__add-icon" /> Добавить список слов
        </Link>
      ) : (
        <ChunksList chunks={chunks} handleOnChunk={handleChunkOnClick} />
      )}
    </div>
  );
}
