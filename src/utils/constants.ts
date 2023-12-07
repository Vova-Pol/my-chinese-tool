// ---------- URLs

export const API_URL = 'https://654b75555b38a59f28ef1b2f.mockapi.io';
// export const API_URL = 'http://localhost:8080';

export const BKRS_SEARCH_URL = 'https://bkrs.info/slovo.php?ch=';
export const GITHUB_AUTHOR_URL = 'https://github.com/Vova-Pol';
export const GITHUB_PROJECT_URL = 'https://github.com/Vova-Pol/my-chinese-tool';

// ---------- Local Storage Keys

export const LS_SLIDER_5000_BOOKMARK_KEY = '5000-bookmark';

// ---------- RegEx

export const LINE_BREAK_AT_THE_END_REGEX = /\n$/;
export const MORE_THAN_ONE_LINE_BREAK_REGEX = /\n{2,}/;
// доработать регулярку по слэшам (на данный момент я сдаюсь)
export const LESS_THAN_TWO_SLASHES_REGEX = /^[\w\W]+(\/[^\/]+){2,3}[^\/]*$/;
export const TEXTAREA_MIN_LENGTH = 5;

// ---------- Тексты ошибок

export const LINE_BREAK_AT_THE_END_ERROR_TEXT =
  'Лишний перенос строки в конце списка';
export const MORE_THAN_ONE_LINE_BREAK_ERROR_TEXT =
  'В списке есть лишний перенос строки';
export const MIN_LENGTH_ERROR_TEXT = `Минимальная длина списка - ${TEXTAREA_MIN_LENGTH} символов`;
export const LESS_THAN_TWO_SLASHES_ERROR_TEXT =
  'Введите данные в указанном формате. На каждой строке должно быть не менее двух слешей "/"';

// ---------- Arror Keys

export const LEFT_ARROW_KEY_CODE = 37;
export const RIGHT_ARROW_KEY_CODE = 39;
export const SPACE_KEY_CODE = 32;

// ---------- Хард-код

export const AIM_AMOUNT = 100;
