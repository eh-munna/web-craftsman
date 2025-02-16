import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import taskSlice from './features/task/taskSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    tasks: taskSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
