import { Card } from "./Card";

export const CardsList = ({ allCards, dispatch }) => {
  const handleDoubleClick = (card) => {
    dispatch({ type: "ADD_CARD", card });
    dispatch({ type: "REMOVE_CARD_ALL", cardId: card.id });
  }
  return (
    <div style={{ width: "fit-content", minWidth: "250px", marginRight: "2rem" }}>
      <h3>All cards to select</h3>
      <p>Double click to select</p>
      {allCards.map((card) => (
        <Card
          key={card.id}
          handleDoubleClick={handleDoubleClick}
          card={card}
        />
      ))}
    </div>
  );
}