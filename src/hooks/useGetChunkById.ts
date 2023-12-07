import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import { IWord } from '../models/models';

export function useGetChunkById(id: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [wordsList, setWordsList] = useState<IWord[]>([]);

  useEffect(() => {
    setIsLoading(true);

    api
      .getChunkById(id)
      .then((res) => {
        setWordsList(res.data.wordsList);
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

  return { isError, isLoading, wordsList };
}
