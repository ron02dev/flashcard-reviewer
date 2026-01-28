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
  const handleNext = () => {
    handleClick("true");
    dispatch(deckSelection("NEXT"));
  };
  const handleBack = () => {
    handleClick("false");
    dispatch(deckSelection("BACK"));
  };

  return (
    <div className="select-container">
      <div className="box box-left">
        <FaLeftLong className="icon anm-btn-hvr" onClick={handleBack} />
      </div>
      <div
        key={selectedDeck?.deckId}
        className={`box middle card-container animate__animated ${
          animate ? "animate__zoomInLeft" : "animate__zoomInRight "
        }`}
      >
        {selectedDeck ? (
          <>
            <div className="card anm-btn-hvr ">
              <h1>{selectedDeck.deckTitle}</h1>
              <p>theres a card</p>
            </div>
            {decks &&
              decks.map((deck: Deck) => (
                <div className="card">{deck.deckId}</div>
              ))}
          </>
        ) : (
          <>
            {" "}
            <div className="card">
              <h1>No created deck please create one</h1>
            </div>
          </>
        )}
      </div>
      <div className="box box-right">
        <FaRightLong className="icon anm-btn-hvr" onClick={handleNext} />
      </div>
    </div>
  );
}

export default SelectFlashcards;
