export interface IWord {
  character: string;
  pinyin: string;
  translation: string;
  usage?: string;
  _id: number;
}

export interface IChunk {
  wordsList: IWord[];
  startTime: string;
  _id: number;
}

export interface ISearchedWord {
  character: string;
  frequency: number;
}

export interface ISaveChunkValues {
  wordsList: ISaveWordValues[];
  startTime: string;
}

export interface ISaveWordValues {
  character: string;
  pinyin: string;
  translation: string;
  usage?: string;
}
