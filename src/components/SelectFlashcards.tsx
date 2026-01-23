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
      <div className="box middle card-container">
        <div className="card card-one">
          <h1>Math Questions</h1>
        </div>
        <div className="card card-two"></div>
        <div className="card card-three"></div>
        <div className="card card-four"></div>
        <div className="card card-five"></div>
      </div>
      <div className="box box-right">
        <FaRightLong className="icon" />
        <p>right</p>
      </div>
    </div>
  );
}

export default SelectFlashcards;
