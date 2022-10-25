import { useReducer } from 'react';
import './App.css';
import { CardsList } from './CardsList';
import { initialState, reducer } from './functions';
import { SelectedCardsList } from './SelectedCardsList';

function App() {
  const [{ cards, allCards }, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Use state hook
        </h1>
      </header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardsList allCards={allCards} dispatch={dispatch} />
        <SelectedCardsList cards={cards} dispatch={dispatch} />
      </div>
      <p>
        Selected cards  counter: {cards.length}
      </p>
      <button 
      style={{
        backgroundColor: "#4db6ac",
        border: "1px solid #4db6ac",
        padding: "0.5rem",
        color: "white",
        borderRadius: "0.25rem",
        fontSize: "medium"
      }}
      onClick={() => {
        dispatch({ type: "SET_ALL_CARDS", allCards: [] });
        dispatch({ type: "SET_CARDS", cards: [] });
      }}>
        Restart
      </button>
    </div>
  );
}

export default App;
