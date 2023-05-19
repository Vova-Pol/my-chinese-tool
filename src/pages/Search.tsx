import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';
import { useFormAndValidation } from '../hooks/useFormAndValidation';
import { characters10_000 } from '../data/characters10_000';
import { ISearchedWord } from '../models/models';

export default function Search() {
  const bkrs_search_url = 'https://bkrs.info/slovo.php?ch=';
  const [resultList, setResultList] = useState<ISearchedWord[]>([]);
  const [isNothingFound, setIsNothingFound] = useState(true);

  const { values, handleChange, setValues, errors, isValid, resetForm } =
    useFormAndValidation({ search: '' });

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const filteredArr: string[] = characters10_000.filter((char) =>
      char.includes(values.search),
    );

    const resultArr: ISearchedWord[] = filteredArr.map((character) => {
      const frequency = characters10_000.indexOf(character) + 1;
      return {
        character,
        frequency,
      };
    });

    console.log(resultArr);
    console.log(resultArr.length);

    if (!resultArr.length) {
      setIsNothingFound(true);
      setResultList([]);
      console.log('Nothing');
    } else {
      console.log('Found!');
      setIsNothingFound(false);
      setResultList(resultArr);
    }
  }

  // Отображение надописи "Найдено 25 иероглифов" требует написания
  // функции-утилиты, которая будет подставлять нужное окончание

  return (
    <div className="search">
      <h1 className="search__title">Поиск по частотному словарю</h1>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="&#128270; введите символ"
          value={values.search}
          onChange={handleChange}
          required
        ></input>
        <button type="submit" className="search__submit-button">
          Поиск
        </button>
      </form>
      <div className="search__result-container">
        {!isNothingFound && (
          <h2 className="search__result-character">
            {resultList[0].character}
          </h2>
        )}

        {/* <span className="search__amount-text">
          {resultList.length +
            ' иероглиф' +
            (String(resultList.length).endsWith('1') ? '' : 'ов') +
            ' найдено!'}
        </span> */}
      </div>
      {!isNothingFound && (
        <ul className="search__result-list">
          {resultList.map((char, i) => {
            return (
              <li key={i} className="search__result-item">
                <Link
                  className="search__result-link"
                  to={bkrs_search_url + char.character}
                  target="_blank"
                >
                  {char!.character}
                </Link>
                <span className="search__frequency">{char.frequency}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
