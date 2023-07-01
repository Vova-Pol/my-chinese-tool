import './Slider5000.css';
import { char5_000 } from '../../data/characters10_000';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BKRS_SEARCH_URL,
  LS_SLIDER_5000_BOOKMARK_KEY,
} from '../../utils/constants';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';

export const Slider5000 = () => {
  const [bookmarkedChar, setBookmarkedChar] = useState(
    localStorage.getItem(LS_SLIDER_5000_BOOKMARK_KEY)
      ? localStorage.getItem(LS_SLIDER_5000_BOOKMARK_KEY)
      : '',
  );
  const [charList, setCharList] = useState(char5_000);
  const [shownChar, setShownChar] = useState(
    bookmarkedChar ? bookmarkedChar : char5_000[0],
  );

  function handleLeftClick() {
    const currIndex = charList.indexOf(shownChar);
    if (currIndex === 0) return;
    setShownChar(charList[currIndex - 1]);
  }

  function handleRightClick() {
    const currIndex = charList.indexOf(shownChar);
    if (currIndex === charList.length - 1) return;
    setShownChar(charList[currIndex + 1]);
  }

  function handleBookmark() {
    setBookmarkedChar(shownChar);
    localStorage.setItem(LS_SLIDER_5000_BOOKMARK_KEY, shownChar);
  }

  return (
    <div className="slider-5000">
      <h1 className="slider-5000__title">5000 самых частых иероглифов</h1>
      <span className="slider-5000__counter">
        {charList.indexOf(shownChar) + 1 + ' / ' + charList.length}
      </span>
      <div className="slider-5000__slider-container">
        <button className="slider-5000__arrow-button" onClick={handleLeftClick}>
          &#8592;
        </button>

        <div className="slider-5000__card">
          <span className="slider-5000__chatacter">{shownChar}</span>
        </div>

        <button
          className="slider-5000__arrow-button"
          onClick={handleRightClick}
        >
          &#8594;
        </button>
      </div>
      <div className="slider-5000__button-container">
        <Link
          to={BKRS_SEARCH_URL + shownChar}
          target="_blank"
          className="slider-5000__bkrs-button slider-5000__button"
        ></Link>
        <Link
          to={`/search/${shownChar}`}
          target="_blank"
          className="slider-5000__search-button slider-5000__button"
        ></Link>
        <button
          className={
            bookmarkedChar === shownChar
              ? 'slider-5000__bookmark slider-5000__bookmark_state_marked'
              : 'slider-5000__bookmark'
          }
          onClick={handleBookmark}
        >
          {bookmarkedChar === shownChar ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
    </div>
  );
};
