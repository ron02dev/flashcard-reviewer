import { createSlice } from "@reduxjs/toolkit";

interface FlashcardState {
  flashcardDecks: flashcardDeck[];
}

const initialState: FlashcardState = {
  flashcardDecks: [
    {
      topicTitle: "deck 1",
      topicCards: [{ cardId: "", question: "question1", answer: "answer1" }],
    },
    {
      topicTitle: "deck 2",
      topicCards: [{ cardId: "", question: "question2", answer: "answer2" }],
    },
  ],
};

const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {},
});

export default flashcardSlice.reducer;
