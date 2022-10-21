import { Card } from "./Card";

export const CardsList = ({ allCards, setCards, setAllCards }) => {
  const handleDoubleClick = (card) => {
    setCards((oldCards) => [...oldCards, card]);
    setAllCards((oldCards) => oldCards.filter((c) => c.id !== card.id));
  }
  return (
    <div style={{ width: "fit-content", minWidth: "250px", marginRight: "2rem" }}>
      <h3>All cards to select</h3>
      {allCards.map((card) => (
        <Card
          handleDoubleClick={handleDoubleClick}
          card={card}
        />
      ))}
    </div>
  );
}