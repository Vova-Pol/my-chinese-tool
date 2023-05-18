import React, { useState } from 'react';
import './AddWords.css';
import { useFormAndValidation } from '../hooks/useFormAndValidation';
import { IFormValues, IWord } from '../models/models';
import { createWordsData, isValidTextArea } from '../utils/utils';
import { useActions } from '../hooks/actions';
import { useAppSelector } from '../hooks/redux';

export default function AddWords() {
  const initialValues: IFormValues = {
    words: '',
  };
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);

  const { addNewWordsList } = useActions();
  const { progress } = useAppSelector((state) => state);
  console.log(progress);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
    const {
      isValidEnterAtTheEnd,
      isValidMoreThanOneEnter,
      isValidateMinLength,
    } = isValidTextArea(evt.target.value);
    setIsValid(
      isValidEnterAtTheEnd && isValidMoreThanOneEnter && isValidateMinLength,
    );
  };

  function handleSubmit(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();
    try {
      const wordsArray = createWordsData(values.words.trim());
      addNewWordsList(wordsArray);
      setValues(initialValues);
      setIsValid(true);
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
