import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__navigation">
        <Link to="/" className="header__logo"></Link>
        <Link to="/" className="header__link">
          Главная
        </Link>
        <Link to="/chunks" className="header__link">
          Карточки
        </Link>
        <Link to="/" className="header__link">
          Видео
        </Link>
        <Link to="/search" className="header__link">
          Поиск
        </Link>
        <Link to="/add-words" className="header__link">
          Добавить
        </Link>
      </nav>
    </header>
  );
}
