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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// State types
export type HeadersState = ReturnType<typeof headersReducer>;
export type ClassVariablesState = ReturnType<typeof classVariablesReducer>;
export type MethodsState = ReturnType<typeof methodsReducer>;
