import React from 'react';
import './AddWords.css';
import { useFormAndValidation } from '../hooks/useFormAndValidation';

export default function AddWords() {
  const { values, handleChange, setValues, errors, isValid, resetForm } =
    useFormAndValidation({ words: '' });

  function handleSubmit(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    resetForm();

    console.log(values);
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
        <button
          type="submit"
          className="add-words__button"
          onClick={handleSubmit}
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
