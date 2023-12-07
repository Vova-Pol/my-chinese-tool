import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import { IChunk } from '../models/models';

export function useGetChunks() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [chunks, setChunks] = useState<IChunk[]>([]);

  useEffect(() => {
    setIsLoading(true);

    api
      .getChunks()
      .then((res) => {
        setChunks(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
        // Дебаг
        console.error('Ошибка при запросе к /chunks/{id}');
        console.error({ err });
      });
  }, []);

  return { isError, isLoading, chunks };
}
