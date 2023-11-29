import { Link, useNavigate } from 'react-router-dom';
import './Chunks.css';
import { ChunksList } from '../../components/ChunksList/ChunksList';
import { IChunk } from '../../models/models';
import { useState, useEffect } from 'react';
import { api } from '../../utils/api';
import { FiPlusCircle } from 'react-icons/fi';

export default function Chunks() {
  const navigate = useNavigate();

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
    navigate(`/chunks/${chunk._id}`);
  }

  return (
    <div className="chunks">
      <h1 className="chunks__title">Эпизоды</h1>
      {chunks.length === 0 ? (
        <Link to="/add-words" className="chunks__suggest">
          <FiPlusCircle className="chunks__add-icon" /> Добавить список слов
        </Link>
      ) : (
        <ChunksList chunks={chunks} handleOnChunk={handleChunkOnClick} />
      )}
    </div>
  );
}
