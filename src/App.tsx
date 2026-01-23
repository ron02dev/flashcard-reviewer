import SelectFlashcards from "./components/SelectFlashcards";
import PlayFlashcards from "./components/PlayFlashcards";
import Header from "./components/Header";
import "./styles/app.scss";
import CreateFlashcards from "./components/CreateFlashcards";
import EditFlashcards from "./components/EditFlashcards";
import { useSelector } from "react-redux";
import type { RootState } from "./state/store";

function App() {
  const appActions = useSelector((state: RootState) => state.control);

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
