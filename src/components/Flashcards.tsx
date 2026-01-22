import { useSelector } from "react-redux";
import type { RootState } from "../state/store";

function Flashcards() {
  const decks = useSelector((state: RootState) => state.flashcard.decks);

  return (
    <div className="deck-list">
      <h1>My Flashcard Decks</h1>

      <div>
        {decks.map((decks) => (
          <div className="deck-item" key={decks.deckId}>
            <h2>{decks.deckTitle}</h2>
            <div>
              {decks.deck.map((card: Card) => (
                <p>{card.question}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flashcards;
