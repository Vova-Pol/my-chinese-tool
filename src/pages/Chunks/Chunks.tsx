import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useNavigate } from 'react-router-dom';
import './Chunks.css';
import { ChunksList } from '../../components/ChunksList/ChunksList';
import { IChunk } from '../../models/models';

export default function Chunks() {
  const navigate = useNavigate();

  function handleChunkOnClick(chunk: IChunk) {
    navigate(`/chunks/${chunk.id}`);
  }

  return (
    <div className="chunks">
      <h1 className="chunks__title">Эпизоды</h1>
      <ChunksList handleOnChunk={handleChunkOnClick} />
    </div>
  );
}
