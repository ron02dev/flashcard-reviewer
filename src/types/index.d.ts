// src/types/global.d.ts
export {};

declare global {
  interface Card {
    cardId: string;
    question: string;
    answer: string;
    imageQuestion?: string;
    imageAnswer?: string;
  }

  interface Deck {
    deckTitle: string;
    deckId: string;
    deck: Card[];
  }


  interface CardPayload {
    deckId: string;
    card: Card;
  }
}
