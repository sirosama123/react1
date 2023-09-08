import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './slices/imageSlice';
import todoReducer from './slices/todo'
import cartVisibilitySlice from './slices/cartVisibilitySlice';
import cartReducer from './slices/cartSlice';

const store = configureStore({
  reducer: {
    image: imageReducer,
    todo:todoReducer,
    visibility:cartVisibilitySlice,
    cart: cartReducer,
  },
});

export default store;
