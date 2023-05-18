import { useDispatch } from 'react-redux';
import { progressSlice } from '../store/progress.slice';
import { bindActionCreators } from '@reduxjs/toolkit';

const actions = { ...progressSlice.actions };

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
