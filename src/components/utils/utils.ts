import { IWord } from '../../models/models';
import { enterAtTheEndRegexp, moreThanOneEntersRegexp } from './constants';

export function createWordsData(wordsString: string): IWord[] {
  return wordsString.split('\n').map((str) => {
    const dataArr = str.split('/');
    return {
      character: dataArr[0],
      pinyin: dataArr[1],
      translation: dataArr[2],
      usage: dataArr[3],
    };
  });
}

export function isValidTextArea(value: string) {
  const isValidateMinLength = value.length > 5;
  const isValidEnterAtTheEnd = !enterAtTheEndRegexp.test(value);
  const isValidMoreThanOneEnter = !moreThanOneEntersRegexp.test(value);
  return { isValidateMinLength, isValidEnterAtTheEnd, isValidMoreThanOneEnter };
}
