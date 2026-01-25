import SelectFlashcards from "./components/SelectFlashcards";
import PlayFlashcards from "./components/PlayFlashcards";
import Header from "./components/Header";
import "./styles/app.scss";
import CreateFlashcards from "./components/CreateFlashcards";
import EditFlashcards from "./components/EditFlashcards";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./state/store";
import { useEffect } from "react";
import { deckSelection } from "./state/flashcard/flashcardSlide";

function App() {
  const appActions = useSelector((state: RootState) => state.control);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("this is run");
    dispatch(deckSelection("IDLE"));
  }, []);
  const renderPage = () => {
    switch (appActions.activeAction) {
      case "SELECT_FLASHCARDS":
        return <SelectFlashcards />;
      case "CREATE_FLASHCARDS":
        return <CreateFlashcards />;
      case "EDIT_FLASHCARDS":
        return <EditFlashcards />;
      case "PLAY_FLASHCARDS":
        return <PlayFlashcards />;
      default:
        return <h1>404 Page Not Found</h1>;
    }
  };

  return (
    <div className="app-container">
      <Header />
      {renderPage()}
    </div>
  );
}

export default App;
