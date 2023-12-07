import {
  IWord,
  IChunk,
  ISaveChunkValues,
  ISaveWordValues,
} from '../models/models';
import {
  LESS_THAN_TWO_SLASHES_ERROR_TEXT,
  LESS_THAN_TWO_SLASHES_REGEX,
  LINE_BREAK_AT_THE_END_ERROR_TEXT,
  LINE_BREAK_AT_THE_END_REGEX,
  MIN_LENGTH_ERROR_TEXT,
  MORE_THAN_ONE_LINE_BREAK_ERROR_TEXT,
  MORE_THAN_ONE_LINE_BREAK_REGEX,
  TEXTAREA_MIN_LENGTH,
} from './constants';

// Функция преобразует строку в массив обектов IWord

export function createWordsData(wordsString: string): ISaveWordValues[] {
  const stringsArray = wordsString.split('\n');

  const wordsList = stringsArray.map((str, i) => {
    // преобразуем каждую строку 我/wǒ/я/我在家 в массив ['我', 'wǒ', 'я', '我在家']
    const wordPropertiesArr = str.split('/');

    // создаем объект
    const wordData: ISaveWordValues = {
      character: wordPropertiesArr[0].trim(),
      pinyin: wordPropertiesArr[1].trim(),
      translation: wordPropertiesArr[2].trim(),
      _id: String(Date.now() + i),
    };

    // если есть последнее поле (необязательное) usage, добавляем
    if (wordPropertiesArr[3]) wordData.usage = wordPropertiesArr[3].trim();

    return wordData;
  });
  return wordsList;
}

export function createWordsListData(
  wordsList: ISaveWordValues[],
  startTime: string,
): ISaveChunkValues {
  return { wordsList, startTime: startTime.trim() };
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
  const isValidLessThanTwoSlashes = value
    .split('\n')
    .every((line) => LESS_THAN_TWO_SLASHES_REGEX.test(line));

  const errorText = !isValidMinLength
    ? MIN_LENGTH_ERROR_TEXT
    : !isValidLineBreakAtTheEnd
    ? LINE_BREAK_AT_THE_END_ERROR_TEXT
    : !isValidMoreThanOneLineBreak
    ? MORE_THAN_ONE_LINE_BREAK_ERROR_TEXT
    : !isValidLessThanTwoSlashes
    ? LESS_THAN_TWO_SLASHES_ERROR_TEXT
    : '';

  return errorText;
}
