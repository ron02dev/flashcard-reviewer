import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "./flashcard/flashcardSlide";
import controlReducer from "./control/controlSlice";
export const store = configureStore({
  reducer: {
    flashcard: flashcardReducer,
    control: controlReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
