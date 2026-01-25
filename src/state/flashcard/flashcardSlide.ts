import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface FlashcardsState {
  decks: Deck[];
  flashcardAction: "IDLE" | "NEXT" | "BACK";
  selectedDeck?: Deck | undefined;
}

type FlashcardAction = "IDLE" | "NEXT" | "BACK";

const initialState: FlashcardsState = {
  decks: [
    {
      deckTitle: "1",
      deckId: 1,
      deck: [
        { cardId: "1", question: "question1", answer: "answer1" },
        { cardId: "2", question: "question2", answer: "answer2" },
        { cardId: "3", question: "question3", answer: "answer3" },
      ],
    },
    {
      deckTitle: "2",
      deckId: 2,
      deck: [
        { cardId: "1", question: "question1", answer: "answer1" },
        { cardId: "2", question: "question2", answer: "answer2" },
        { cardId: "3", question: "question3", answer: "answer3" },
      ],
    },
    {
      deckTitle: "index num 2",
      deckId: 3,
      deck: [
        { cardId: "1", question: "question1", answer: "answer1" },
        { cardId: "2", question: "question2", answer: "answer2" },
        { cardId: "3", question: "question3", answer: "answer3" },
      ],
    },
  ],
  selectedDeck: undefined,
  flashcardAction: "IDLE",
};

const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
    deckSelection: (state, action: PayloadAction<FlashcardAction>) => {
      let firstDeck = state.decks[0];
      let lastDeck = state.decks.length - 1;
      const selectedDeckId = state?.selectedDeck?.deckId;
      const selectedDeck = state.selectedDeck;

      switch (action.payload) {
        case "NEXT":
          const nextDeck = state.decks[selectedDeckId!];

          if (nextDeck) {
            state.selectedDeck = nextDeck;
          } else {
            state.selectedDeck = firstDeck;
          }
          break;
        case "BACK":
          const prevDeck = state.decks[selectedDeck?.deckId! - 2];

          if (prevDeck) {
            state.selectedDeck = prevDeck;
          } else {
            state.selectedDeck = state.decks[lastDeck];
          }
          break;

        case "IDLE":
          // this will get the first available deck
          if (selectedDeckId == 0 || selectedDeck == undefined) {
            state.selectedDeck = firstDeck;
          } else {
            state.selectedDeck;
          }
          break;
        default:
          break;
      }
    },
  },
});

export const { deckSelection } = flashcardSlice.actions;

export default flashcardSlice.reducer;
