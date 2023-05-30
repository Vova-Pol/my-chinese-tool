export const LS_PROGRESS_KEY = 'words-chunks';

export const LINE_BREAK_AT_THE_END_REGEX = /\n$/;
export const MORE_THAN_ONE_LINE_BREAK_REGEX = /\n{2,}/;
export const LESS_THAN_TWO_SLASHES_REGEX = /^\w+(\/[\w\s\.\,\;\(\)]+){2,3}$/;
export const TEXTAREA_MIN_LENGTH = 5;

export const LINE_BREAK_AT_THE_END_ERROR_TEXT =
  'Лишний перенос строки в конце списка';
export const MORE_THAN_ONE_LINE_BREAK_ERROR_TEXT =
  'В списке есть лишний перенос строки';
export const MIN_LENGTH_ERROR_TEXT = `Минимальная длина списка - ${TEXTAREA_MIN_LENGTH} символов`;
export const LESS_THAN_TWO_SLASHES_ERROR_TEXT =
  'Введите данные в указанном формате. На каждой строке должно быть не менее двух слешей "/"';

export const AIM_AMOUNT = 500;

export const BKRS_SEARCH_URL = 'https://bkrs.info/slovo.php?ch=';

export const LEFT_ARROW_KEY_CODE = 37;
export const RIGHT_ARROW_KEY_CODE = 39;
export const SPACE_KEY_CODE = 32;
