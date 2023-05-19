export interface IWord {
  character: string;
  pinyin: string;
  translation: string;
}

export interface IFormValues {
  words: string;
}

export type wordsListType = IWord[];

export interface ISearchedWord {
  character: string;
  frequency: number;
}