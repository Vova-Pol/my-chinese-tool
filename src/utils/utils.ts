import { IChunk, IWord } from '../models/models';
import {
  LINE_BREAK_AT_THE_END_ERROR_TEXT,
  LINE_BREAK_AT_THE_END_REGEX,
  MIN_LENGTH_ERROR_TEXT,
  MORE_THAN_ONE_LINE_BREAK_ERROR_TEXT,
  MORE_THAN_ONE_LINE_BREAK_REGEX,
  TEXTAREA_MIN_LENGTH,
} from './constants';

// Данные сабмитятся через форму в формате
// 我/wo/я\n
// 你/ni/ты\n и т.д.
// Функция преобразует строку в обект с массивом
// объектов слов и айдишником

export function createWordsData(wordsString: string): IChunk {
  const stringsArray = wordsString.split('\n');
  const wordsList = stringsArray.map((str, i) => {
    // преобразуем каждую строку 我/wo/я в массив ['我', 'wo', 'я']
    const wordData = str.split('/');
    // возвращаем объект
    return {
      character: wordData[0],
      pinyin: wordData[1],
      translation: wordData[2],
      id: Date.now() + i,
    };
  });
  return { wordsList, id: Date.now() };
}

// Преобразовать время из string в number (кол-во секунд). "1:41" -> 101

export function convertTime(timeStr: string): number {
  const timeArr = timeStr.split(':');
  return Number(timeArr[0]) * 60 + Number(timeArr[1]);
}

// Валидация Textarea

export function getTextAreaError(value: string) {
  const isValidMinLength = value.length > TEXTAREA_MIN_LENGTH;
  const isValidLineBreakAtTheEnd = !LINE_BREAK_AT_THE_END_REGEX.test(value);
  const isValidMoreThanOneLineBreak =
    !MORE_THAN_ONE_LINE_BREAK_REGEX.test(value);

  const errorText = !isValidMinLength
    ? MIN_LENGTH_ERROR_TEXT
    : !isValidLineBreakAtTheEnd
    ? LINE_BREAK_AT_THE_END_ERROR_TEXT
    : !isValidMoreThanOneLineBreak
    ? MORE_THAN_ONE_LINE_BREAK_ERROR_TEXT
    : '';

  return errorText;
}
