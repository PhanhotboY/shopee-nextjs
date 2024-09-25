import { language } from './language';

import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    ...language.initialState,
  },
  reducers: {
    ...language.reducers,
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguage } = appSlice.actions;

export default appSlice.reducer;
