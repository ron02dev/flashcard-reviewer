import { FaGear } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import "../styles/app.scss";
import "../styles/nav.scss";
import "../styles/animations.scss";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_ACTION } from "../state/control/controlSlice";

function Header() {
  const dispatch = useDispatch();
  const handleAddAction = () => {
    dispatch(SET_ACTIVE_ACTION("CREATE_FLASHCARDS"));
  };
  const handleEditAction = () => {
    dispatch(SET_ACTIVE_ACTION("EDIT_FLASHCARDS"));
  };
  const handleSelectAction = () => {
    dispatch(SET_ACTIVE_ACTION("SELECT_FLASHCARDS"));
  };

  return (
    <div className="header-container">
      <h1 className="title anm-btn-hvr" onClick={handleSelectAction}>
        Flashcard Reviewer
      </h1>
      <div className="nav-container">
        <IoAdd
          size="50px"
          className="add-icon icon anm-btn-hvr"
          onClick={handleAddAction}
        />
        <FaGear
          className="gear-icon icon anm-btn-hvr"
          size="50px"
          onClick={handleEditAction}
        />
      </div>
    </div>
  );
}

export default Header;
