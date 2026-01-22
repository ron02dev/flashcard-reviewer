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

  interface flashcardDeck {
    topicTitle: string;
    topicCards: Card[];
  }
}
