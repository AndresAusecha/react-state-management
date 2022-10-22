import { useState } from 'react';
import './App.css';
import { CardsList } from './CardsList';
import { SelectedCardsList } from './SelectedCardsList';

const initialCardsInfo = [{
  id: "first-card",
  title: "First",
  description: "This is a card description"
},
{
  id: "second-card",
  title: "Second",
  description: "This is a card description"
},
{
  id: "thid-card",
  title: "Third",
  description: "This is a card description"
}
];

function App() {
  const [cards, setCards] = useState([]);
  const [allCards, setAllCards] = useState(initialCardsInfo);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Use state hook
        </h1>
      </header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardsList allCards={allCards} setCards={setCards} setAllCards={setAllCards} />
        <SelectedCardsList cards={cards}  setCards={setCards} setAllCards={setAllCards}  />
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
        setAllCards(initialCardsInfo);
        setCards([]);
      }}>
        Restart
      </button>
    </div>
  );
}

export default App;
