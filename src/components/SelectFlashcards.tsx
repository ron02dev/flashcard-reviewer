import "../styles/select.scss";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import "../styles/flashcards.scss";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACTIVE_ACTION } from "../state/control/controlSlice";
import type { RootState } from "../state/store";
import { deckSelection } from "../state/flashcard/flashcardSlide";
import "animate.css";
import { useState } from "react";

function SelectFlashcards() {
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(deckSelection("NEXT"));
  };
  const handleBack = () => {
    dispatch(deckSelection("BACK"));
  };

  return (
    <div className="select-container">
      <div className="box box-left">
        <FaLeftLong className="icon anm-btn-hvr" onClick={handleBack} />
      </div>
      <Decks />
      <div className="box box-right">
        <FaRightLong className="icon anm-btn-hvr" onClick={handleNext} />
      </div>
    </div>
  );
}

function Decks() {
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(true);
  const selectedDeck = useSelector(
    (state: RootState) => state.flashcard.selectedDeck,
  );
  const decks = useSelector((state: RootState) => state.flashcard.decks);

  const handleSelect = () => {
    dispatch(SET_ACTIVE_ACTION("PLAY_FLASHCARDS"));
  };

  const handleClick = (text: string) => {
    if (text == "true") {
      setAnimate(false);
      setTimeout(() => setAnimate(false), 25);
    } else {
      setAnimate(true);
      setTimeout(() => setAnimate(true), 25);
    }
  };

  return (
    <>
      <div
        key={selectedDeck?.deckId}
        className={`box middle card-container animate__animated ${
          animate ? "animate__zoomInLeft" : "animate__zoomInRight "
        }`}
      >
        {selectedDeck ? (
          <>
            <div className="card card-one" onClick={handleSelect}>
              <h1>{selectedDeck.deckTitle}</h1>
              <p>theres a card</p>
            </div>
            {selectedDeck &&
              selectedDeck.deck.map((card: Card) => (
                <div className="card" onClick={handleSelect}>
                  {card.question}
                </div>
              ))}
          </>
        ) : (
          <>
            {" "}
            <div className="card card-one">
              <h1>No created deck please create one</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// FEB 3: ON HOVER I WANT THE CARD TO SHOW AS A PLAYING CARD THAT IS ON HAND
export default SelectFlashcards;
