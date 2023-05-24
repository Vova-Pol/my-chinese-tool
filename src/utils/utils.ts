import { IChunk, IWord } from '../models/models';

// Данные сабмитятся через форму в формате
// 我/wo/я\n
// 你/ni/ты\n и т.д.
// Функция преобразует строку в обект с массивом
// объектов слов и айдишником

export function createWordsData(wordsString: string): IChunk {
  const stringsArray = wordsString.split('\n');
  const wordsList = stringsArray.map((str) => {
    // преобразуем каждую строку 我/wo/я в массив ['我', 'wo', 'я']
    const wordData = str.split('/');
    // возвращаем объект
    return {
      character: wordData[0],
      pinyin: wordData[1],
      translation: wordData[2],
      id: Date.now(),
    };
  });
  return { wordsList, id: Date.now() };
}

// Преобразовать время из string в number (кол-во секунд). "1:41" -> 101

export function convertTime(timeStr: string): number {
  const timeArr = timeStr.split(':');
  return Number(timeArr[0]) * 60 + Number(timeArr[1]);
}
