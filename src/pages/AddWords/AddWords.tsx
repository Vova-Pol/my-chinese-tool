import React, { useState } from 'react';
import './AddWords.css';
import { createChunkData, createWordData } from '../../utils/utils';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/redux';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

export default function AddWords() {
  const initialValues = {
    words: '',
    startTime: '',
  };

  const {
    values,
    isInputValid,
    isTextAreaValid,
    errors,
    handleInputChange,
    handleTextAreaChange,
    resetForm,
  } = useFormAndValidation(initialValues);

  const { addNewWordsList } = useActions();
  const { progress } = useAppSelector((state) => state);

  function handleSubmit(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    try {
      const wordsList = createWordData(values.words.trim());
      const chunkData = createChunkData(wordsList, values.startTime.trim());
      addNewWordsList(chunkData);
      resetForm();
    } catch (err) {
      console.log(`Ошибка! Что-то пошло не так при сабмите формы: ${err}`);
    }
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
          onChange={handleTextAreaChange}
          value={values.words}
        ></textarea>
        <span className="add-words__error">{errors.words}</span>
        <label className="add-words__label" htmlFor="words">
          Вермя начала эпизода:
        </label>
        <input
          type="text"
          name="startTime"
          value={values.startTime}
          onChange={handleInputChange}
          placeholder="1:41"
          minLength={4}
          maxLength={8}
        ></input>
        <span className="add-words__error">{errors.startTime}</span>
        <button
          type="submit"
          className="add-words__button"
          onClick={handleSubmit}
          disabled={isInputValid && isTextAreaValid ? false : true}
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
