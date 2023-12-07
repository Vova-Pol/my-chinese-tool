import './Footer.css';
import { FaWhatsapp, FaTelegram, FaReact } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { SiTypescript, SiExpress, SiMongodb } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
import { TbServer2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { GITHUB_AUTHOR_URL, GITHUB_PROJECT_URL } from '../../utils/constants';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h4 className="footer__list-title">Контакты</h4>
        <ul className="footer__list">
          <li className="footer__list-item">
            <FaWhatsapp className="footer__contacts-icon" />
            +7-967-292-84-53
          </li>
          <li className="footer__list-item">
            <FaTelegram className="footer__contacts-icon" />
            @Vova_Pol_94
          </li>
          <li className="footer__list-item">
            <MdOutlineMailOutline className="footer__contacts-icon" />
            ya-chai777@yandex.ru
          </li>
        </ul>
      </div>

      <div className="footer__container">
        <h4 className="footer__list-title">Технологии</h4>
        <ul className="footer__list">
          <li className="footer__list-item">
            <FaReact className="footer__contacts-icon" />
            React
          </li>
          <li className="footer__list-item">
            <SiTypescript className="footer__contacts-icon" />
            TypeScript
          </li>
          <li className="footer__list-item">
            <TbServer2 className="footer__contacts-icon" />
            Mock Api
          </li>
        </ul>
      </div>

      <div className="footer__container">
        <h4 className="footer__list-title">Код</h4>
        <ul className="footer__list">
          <li className="footer__list-item">
            <FaGithub className="footer__contacts-icon" />
            <Link
              to={GITHUB_PROJECT_URL}
              className="footer__link"
              target="_blank"
            >
              Проект
            </Link>
          </li>
          <li className="footer__list-item">
            <FaGithub className="footer__contacts-icon" />
            <Link
              to={GITHUB_AUTHOR_URL}
              className="footer__link"
              target="_blank"
            >
              Автор
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
