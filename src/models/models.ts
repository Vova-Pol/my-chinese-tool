export interface IWord {
  character: string;
  pinyin: string;
  translation: string;
  usage?: string;
  id: number;
}

export interface IChunk {
  wordsList: IWord[];
  id: number;
  startTime: string;
}

export interface ISearchedWord {
  character: string;
  frequency: number;
}
