import { useAppSelector } from '../../hooks/redux';
import FullFlashcardsList from '../FullFlashcardsList/FullFlashcardsList';
import './LastAdded.css';

export const LastAdded = () => {
  const { wordsChunks } = useAppSelector((state) => state.progress);
  const lastAdded = wordsChunks[wordsChunks.length - 1].wordsList;

  return (
    <section className="last-added">
      <h2 className="last-added__title">Последние добавленные</h2>
      <FullFlashcardsList wordsList={lastAdded} />
    </section>
  );
};
