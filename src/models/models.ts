export interface IWord {
  character: string;
  pinyin: string;
  translation: string;
  id: string;
}

export interface IChunk {
  wordsList: IWord[];
  id: string;
}

export interface ISearchedWord {
  character: string;
  frequency: number;
}
