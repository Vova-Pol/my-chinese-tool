import React, { useState } from 'react';
import './AddWords.css';
import { createWordsData } from '../../utils/utils';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { useTextareaValidation } from '../../hooks/useTextareaValidation';

export default function AddWords() {
  const initialValues = {
    words: '',
  };
  const { values, isValid, error, handleChange, resetForm } =
    useTextareaValidation(initialValues);

  const { addNewWordsList } = useActions();
  const { progress } = useAppSelector((state) => state);
  console.log(progress);

  function handleSubmit(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    try {
      const wordsArray = createWordsData(values.words.trim());
      addNewWordsList(wordsArray);
      resetForm();
    } catch (err) {
      console.log(`Ошибка! Что-то пошло не так при сабмите формы: ${err}`);
    }
  }

  return (
    <div className="add-words">
      <h1 className="add-words__title">Добавить новые слова</h1>
      <form className="add-words__form">
        <label className="add-words__label" htmlFor="words">
          Список слов:
        </label>
        <textarea
          name="words"
          className="add-words__input"
          required
          onChange={handleChange}
          value={values.words}
        ></textarea>
        <span className="add-words__error">{error}</span>
        <button
          type="submit"
          className="add-words__button"
          onClick={handleSubmit}
          disabled={isValid ? false : true}
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
