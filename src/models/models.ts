export interface IWord {
  character: string;
  pinyin: string;
  translation: string;
  id: number;
}

export interface IChunk {
  wordsList: IWord[];
  id: number;
}

export interface ISearchedWord {
  character: string;
  frequency: number;
}
