import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface CollectionOfDecksType {
  decks: Deck[];
}

// interface CardPayload {
//   deckId: string;
//   card: Card;
// }

const initialState: CollectionOfDecksType = {
  decks: [
    {
      deckTitle: "deck 1",
      deckId: "1",
      deck: [
        { cardId: "1", question: "question1", answer: "answer1" },
        { cardId: "2", question: "question2", answer: "answer2" },
        { cardId: "3", question: "question3", answer: "answer3" },
      ],
    },
    {
      deckTitle: "deck 2",
      deckId: "2",
      deck: [
        { cardId: "1", question: "question1", answer: "answer1" },
        { cardId: "2", question: "question2", answer: "answer2" },
        { cardId: "3", question: "question3", answer: "answer3" },
      ],
    },
  ],
};

const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
    // addCardToDeck: (state, action: PayloadAction<CardPayload>) => {
    //   // const targetDeck = state.collection.find(
    //   //   (deck) => deck.deckId === action.payload.deckId,
    //   // );
    //   // if (targetDeck) {
    //   //   targetDeck.deck.push(action.payload.card);
    //   // }
    // },
  },
});

// export const { addCardToDeck } = flashcardSlice.actions;

export default flashcardSlice.reducer;
