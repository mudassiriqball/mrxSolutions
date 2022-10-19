import { configureStore } from '@reduxjs/toolkit';
// reducers
import lang from './ducks/lang';

const store = configureStore({
  reducer: {
    lang,
  },
});

export default store;