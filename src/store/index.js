import { configureStore } from '@reduxjs/toolkit';

import headersReducer from './header';
import classVariablesReducer from './class-variables';
import methodsReducer from './methods';

const store = configureStore({
  reducer: {
    headers: headersReducer,
    variables: classVariablesReducer,
    methods: methodsReducer
  }
});

export default store;
