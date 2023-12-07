export interface IWord {
  character: string;
  pinyin: string;
  translation: string;
  usage?: string;
  _id: string;
}

export interface IChunk {
  wordsList: IWord[];
  startTime: string;
  _id: string;
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
  _id: string;
}
