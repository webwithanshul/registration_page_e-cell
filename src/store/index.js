import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './slices/registrationSlice';
import eventsReducer from './slices/eventsSlice';

export const store = configureStore({
  reducer: {
    registration: registrationReducer,
    events: eventsReducer
  }
});

export default store;
