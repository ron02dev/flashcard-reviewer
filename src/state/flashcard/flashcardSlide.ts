import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface FlashcardsState {
  decks: Deck[];
  flashcardAction: "IDLE" | "NEXT" | "BACK";
  selectedDeck: Deck;
}

type FlashcardAction = "IDLE" | "NEXT" | "BACK";

const initialState: FlashcardsState = {
  decks: [
    {
      deckTitle: "MATH QUESTIONS1",
      deckId: 1,
      deck: [
        { cardId: "1", question: "question1", answer: "answer1" },
        { cardId: "2", question: "question2", answer: "answer2" },
        { cardId: "3", question: "question3", answer: "answer3" },
      ],
    },
    {
      deckTitle: "interview QUESTIONS2",
      deckId: 2,
      deck: [
        { cardId: "1", question: "question1", answer: "answer1" },
        { cardId: "2", question: "question2", answer: "answer2" },
        { cardId: "3", question: "question3", answer: "answer3" },
      ],
    },
    {
      deckTitle: "THIRD DECK QUESTIONS3",
      deckId: 3,
      deck: [
        { cardId: "1", question: "question1", answer: "answer1" },
        { cardId: "2", question: "question2", answer: "answer2" },
        { cardId: "3", question: "question3", answer: "answer3" },
      ],
    },
  ],
  selectedDeck:
    {
      deckTitle: "MATH QUESTIONS1",
      deckId: 1,
      deck: [
        { cardId: "1", question: "question1", answer: "answer1" },
        { cardId: "2", question: "question2", answer: "answer2" },
        { cardId: "3", question: "question3", answer: "answer3" },
      ],
    }
    ,
  flashcardAction: "IDLE",
   
};

const flashcardSlice = createSlice({
  name: "flashcard",
  initialState,
  reducers: {
    deckSelection: (state, action: PayloadAction<FlashcardAction>) => {
         const deckLen = state.decks.length;
      switch (action.payload) {
        case "NEXT":
    

       if(state.selectedDeck.deckId == deckLen){
      state.selectedDeck = state.decks[0]
       }else{
state.selectedDeck = state.decks[state.selectedDeck.deckId++]
       }
        
    

          break;
        case "BACK":
               if(state.selectedDeck.deckId == deckLen){
      state.selectedDeck = state.decks[0]
       }else{
state.selectedDeck = state.decks[state.selectedDeck.deckId--]
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
