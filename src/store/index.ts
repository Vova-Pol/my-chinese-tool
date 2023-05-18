import { configureStore } from '@reduxjs/toolkit';
import { progressSlice } from './progress.slice';

export const store = configureStore({
  reducer: {
    progress: progressSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
