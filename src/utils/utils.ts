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
// Функция преобразует строку в обект с массивом IWord[]

export function createWordData(wordsString: string): IWord[] {
  const stringsArray = wordsString.split('\n');
  const wordsList = stringsArray.map((str, i) => {
    // преобразуем каждую строку 我/wo/я/我在家 в массив ['我', 'wo', 'я', '我在家']
    const wordPropertiesArr = str.split('/');

    // создаем объект
    const wordData: IWord = {
      character: wordPropertiesArr[0].trim(),
      pinyin: wordPropertiesArr[1].trim(),
      translation: wordPropertiesArr[2].trim(),
      id: Date.now() + i,
    };

    // если есть последнее поле (необязательное) usage, добавляем
    if (wordPropertiesArr[3]) wordData.usage = wordPropertiesArr[3].trim();

    return wordData;
  });
  return wordsList;
}

export function createChunkData(wordsList: IWord[], startTime: string): IChunk {
  return { wordsList, startTime: startTime.trim(), id: Date.now() };
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
