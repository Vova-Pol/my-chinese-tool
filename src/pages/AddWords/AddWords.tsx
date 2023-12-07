import React, { useEffect, useRef, useState } from 'react';
import './AddWords.css';
import { createWordsData, createWordsListData } from '../../utils/utils';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { api } from '../../utils/api';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function AddWords() {
  const [isLoading, setIsLoading] = useState(false);
  const [successText, setSuccessText] = useState('');
  const [errorText, setErrorText] = useState('');

  const {
    values,
    isInputValid,
    isTextAreaValid,
    errors,
    handleInputChange,
    handleTextAreaChange,
    resetForm,
  } = useFormAndValidation({
    words: '',
    startTime: '',
  });

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!textareaRef.current) return;
    textareaRef.current.focus();
  }, []);

  function handleSubmit(evt: React.MouseEvent<HTMLButtonElement>) {
    evt.preventDefault();

    setErrorText('');
    setSuccessText('');
    setIsLoading(true);

    const wordsList = createWordsData(values.words);
    const chunkData = createWordsListData(wordsList, values.startTime);

    api
      .postChunk(chunkData)
      .then((res) => {
        setIsLoading(false);
        setSuccessText('Список слов добавлен');
        resetForm();
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorText('Ошибка. Поробуйте еще раз');
        // Дебаг
        console.error('Ошибка при запросе на сервер');
        console.error({ err });
      });
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
          ref={textareaRef}
          onChange={handleTextAreaChange}
          value={values.words}
          placeholder="我/wǒ/я, мой/我在家&#10;中国/zhōngguó/Китай; китайский/他在中国"
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
          {isLoading ? (
            <AiOutlineLoading3Quarters className="add-words__loading" />
          ) : (
            'Добавить'
          )}
        </button>
      </form>
      <span
        className={
          errorText
            ? 'add-words__result_type_error'
            : 'add-words__result_type_success'
        }
      >
        {errorText ? errorText : successText}
      </span>
    </div>
  );
}
