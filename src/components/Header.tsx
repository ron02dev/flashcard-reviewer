import { FaGear } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import "../styles/app.scss";
import "../styles/nav.scss";

function Header() {
  return (
    <div className="header-container">
      <h1 className="title">Flashcard Reviewer</h1>
      <div className="nav-container">
        <IoAdd size="50px" className="add-icon" />
        <FaGear className="gear-icon" size="50px" />
      </div>
    </div>
  );
}

export default Header;
