import "../styles/select.scss";
import { FaLeftLong, FaRightLong } from "react-icons/fa6";
import "../styles/flashcards.scss";
import { useDispatch, useSelector } from "react-redux";
import { SET_ACTIVE_ACTION } from "../state/control/controlSlice";
import type { RootState } from "../state/store";
import { deckSelection } from "../state/flashcard/flashcardSlide";
import { useEffect } from "react";

function SelectFlashcards() {
  const dispatch = useDispatch();

 
  const selectedDeck= useSelector((state: RootState) => state.flashcard.selectedDeck);
   const decks= useSelector((state: RootState) => state.flashcard.decks);



  useEffect(()=>{

    console.log(selectedDeck.deckId,"deckiod")
    console.log(decks.length,"leng")
  },[selectedDeck])


  const handleSelect = () => {
    dispatch(SET_ACTIVE_ACTION("PLAY_FLASHCARDS"));
  };

  const handleNext = () => {
    dispatch(deckSelection("NEXT"));
    console.log("this is nmext")
    
  };
  const handleBack = () => {
    dispatch(deckSelection("BACK"));

  };

  

  return (
    <div className="select-container">
      <div className="box box-left">
        <p>left</p>
        <FaLeftLong className="icon" onClick={handleBack} />
      </div>
      <div className="box middle card-container">
      

      {selectedDeck && <div className={`card card-one`} onClick={handleSelect}>

       <h3>{selectedDeck.deckTitle}</h3>
       </div> }
       
        <div className="card card-two"></div>
        <div className="card card-three"></div>
        <div className="card card-four"></div>
        <div className="card card-five"></div>
      </div>
      <div className="box box-right">
        <FaRightLong className="icon" onClick={handleNext} />
        <p>right</p>
      </div>
    </div>
  );
}

export default SelectFlashcards;
