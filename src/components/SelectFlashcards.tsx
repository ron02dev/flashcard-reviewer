import "../styles/select.scss";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import "../styles/flashcards.scss";

function SelectFlashcards() {
  return (
    <div className="select-container">
      <div className="box box-left">
        <p>left</p>
        <FaLeftLong className="icon" />
      </div>
      <div className="box middle flashcard-container">
        <div className="card">
          <h2>Math Questions</h2>
        </div>
      </div>
      <div className="box box-right">
        <FaRightLong className="icon" />
        <p>right</p>
      </div>
    </div>
  );
}

export default SelectFlashcards;
