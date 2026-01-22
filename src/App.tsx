import Flashcards from "./components/Flashcards";
import Header from "./components/Header";
import "./styles/app.scss";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Flashcards />
      </div>
    </>
  );
}

export default App;
