import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Search.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { characters10_000 } from '../../data/characters10_000';
import { ISearchedWord } from '../../models/models';
import { BKRS_SEARCH_URL } from '../../utils/constants';

const Search: React.FC = () => {
  const [resultList, setResultList] = useState<ISearchedWord[]>([]);
  const [isNothingFound, setIsNothingFound] = useState(true);

  const {
    values,
    handleInputChange,
    setValues,
    errors,
    isInputValid,
    resetForm,
  } = useFormAndValidation({ search: '' });

  const { character } = useParams();

  useEffect(() => {
    if (character) {
      setValues({ ...values, search: character });
      searchCharacter(character);
    } else {
      resetForm();
      setIsNothingFound(true);
      setResultList([]);
    }
  }, [character]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

  function searchCharacter(searchedChar: string) {
    const filteredArr = characters10_000.filter((char) =>
      char.includes(searchedChar),
    );

    const resultArr: ISearchedWord[] = filteredArr.map((character) => {
      const frequency = characters10_000.indexOf(character) + 1;
      return {
        character,
        frequency,
      };
    });

    if (!resultArr.length) {
      setIsNothingFound(true);
      setResultList([]);
    } else {
      setIsNothingFound(false);
      setResultList(resultArr);
    }
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    searchCharacter(values.search);
  }

  return (
    <div className="search">
      <h1 className="search__title">Поиск по частотному словарю</h1>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          className="search__input"
          name="search"
          type="text"
          ref={inputRef}
          placeholder="&#128270;    введите символ"
          value={values.search}
          onChange={handleInputChange}
          required
        ></input>
        <button type="submit" className="search__submit-button">
          Поиск
        </button>
      </form>
      <div className="search__result-container">
        {!isNothingFound && (
          <>
            <h2 className="search__result-character">
              {resultList[0].character}
            </h2>
            <ul className="search__result-list">
              {resultList.map((char, i) => {
                return (
                  <li key={i} className="search__result-item">
                    <Link
                      className="search__result-link"
                      to={BKRS_SEARCH_URL + char.character}
                      target="_blank"
                    >
                      {char!.character}
                    </Link>
                    <span
                      className="search__frequency"
                      style={{
                        color:
                          char.frequency < 1000
                            ? '#19a5a8'
                            : char.frequency < 5000
                            ? '#ffd65c'
                            : '#d94730',
                      }}
                    >
                      {char.frequency}
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
