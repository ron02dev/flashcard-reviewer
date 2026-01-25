import "../styles/select.scss";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import "../styles/flashcards.scss";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACTIVE_ACTION } from "../state/control/controlSlice";
import type { RootState } from "../state/store";
import { deckSelection } from "../state/flashcard/flashcardSlide";

function SelectFlashcards() {
  const dispatch = useDispatch();

  const selectedDeck = useSelector(
    (state: RootState) => state.flashcard.selectedDeck,
  );
  const decks = useSelector((state: RootState) => state.flashcard.decks);

  const handleSelect = () => {
    dispatch(SET_ACTIVE_ACTION("PLAY_FLASHCARDS"));
  };

  const handleNext = () => {
    dispatch(deckSelection("NEXT"));
  };
  const handleBack = () => {
    dispatch(deckSelection("BACK"));
  };

  return (
    <div className="select-container">
      <div className="box box-left">
        <FaLeftLong className="icon" onClick={handleBack} />
      </div>
      <div className="box middle card-container">
        {selectedDeck ? (
          <div className="card">
            <h1>{selectedDeck.deckTitle}</h1>
            <p>theres a card</p>
          </div>
        ) : (
          <div className="card">
            <h1>No created deck please create one</h1>
          </div>
        )}
      </div>
      <div className="box box-right">
        <FaRightLong className="icon" onClick={handleNext} />
      </div>
    </div>
  );
}

export default SelectFlashcards;
