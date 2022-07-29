import {configureStore} from '@reduxjs/toolkit';
import urlReducer from "src/pages/Dashboard/redux/url";

export const store = configureStore({
  reducer: {
    url: urlReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
