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
      <button onClick={() => {
        setAllCards(initialCardsInfo);
        setCards([]);
      }}>
        restart
      </button>
    </div>
  );
}

export default App;
