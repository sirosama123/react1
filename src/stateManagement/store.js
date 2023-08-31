import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './slices/imageSlice';
import todoReducer from './slices/todo'

const store = configureStore({
  reducer: {
    image: imageReducer,
    todo:todoReducer
  },
});

export default store;
