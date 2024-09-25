import { LANGUAGES } from '@/constants';

export const language = {
  initialState: {
    language: LANGUAGES.VI,
  },
  reducers: {
    changeLanguage: (state, action) => {
      console.log('action payload: ', action.payload);
      state.language = action.payload;
    },
  },
};
