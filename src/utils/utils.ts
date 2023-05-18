import { IWord } from '../models/models';

export function createWordsData(wordsString: string): IWord[] {
  return wordsString.split('\n').map((str) => {
    const dataArr = str.split('/');
    return {
      character: dataArr[0],
      pinyin: dataArr[1],
      translation: dataArr[2],
    };
  });
}
