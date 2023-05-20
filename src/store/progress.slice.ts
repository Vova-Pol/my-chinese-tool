import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IChunk } from '../models/models';
import { LS_PROGRESS_KEY } from '../utils/constants';

interface progressState {
  wordsChunks: IChunk[];
}

const init = localStorage.getItem(LS_PROGRESS_KEY)
  ? JSON.parse(localStorage.getItem(LS_PROGRESS_KEY)!)
  : [];

const initialState: progressState = {
  wordsChunks: init,
};

export const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    addNewWordsList(state, action: PayloadAction<IChunk>) {
      state.wordsChunks.push(action.payload);
      localStorage.setItem(LS_PROGRESS_KEY, JSON.stringify(state.wordsChunks));
    },
  },
});
