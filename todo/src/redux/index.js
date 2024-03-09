
import { configureStore } from '@reduxjs/toolkit';
import  taskReducer  from './taskSlice';
import activeItemReducer from './activeItemSlice';

export default configureStore({
  reducer: {
    tasks: taskReducer,
    activeItem: activeItemReducer,
  },
});